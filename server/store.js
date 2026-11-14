// Excel-backed store. Every workbook is read once at start and kept in memory.
// Writes go through one queue: a change marks its workbook dirty, a 200 ms debounce
// then writes the whole workbook to a temp file and renames it into place.
import ExcelJS from 'exceljs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// On Vercel only /tmp is writable, and it is wiped when the function goes idle (data resets to the seed).
export const IS_VERCEL = !!process.env.VERCEL;
export const DATA_DIR = process.env.KONTRAK_DATA_DIR || (IS_VERCEL ? '/tmp/kontrak-data' : path.join(ROOT, 'data'));

const T = ['created_at', 'updated_at'];
// One workbook per area, one sheet per table. Column order is the order shown in Excel.
export const SCHEMA = {
  'kontrak_users.xlsx': {
    users: ['id', 'role', 'email', 'password_hash', 'first_name', 'last_name', 'status', 'verify_token', 'is_demo', ...T],
    students: ['id', 'user_id', 'university', 'university_email', 'nationality', 'permit_type', 'permit_wording_note', 'permit_valid_until', 'work_rule', 'practice_areas', 'languages', 'bio', 'first_job_done', 'permit_confirmed', 'verified_at', 'is_demo', ...T],
    clients: ['id', 'user_id', 'company_name', 'legal_form', 'register_number', 'vat_id', 'city', 'contact_role', 'website', 'register_check', 'plan', 'is_demo', ...T],
    sessions: ['id', 'token_hash', 'user_id', 'expires_at', ...T],
  },
  'kontrak_work.xlsx': {
    briefs: ['id', 'client_id', 'title', 'description', 'scope_deliverable', 'practice_areas', 'fee_cents', 'scoped_hours', 'jurisdiction', 'location_mode', 'city', 'deadline', 'min_permit_types', 'languages', 'status', 'posted_at', 'is_demo', ...T],
    bids: ['id', 'brief_id', 'student_id', 'proposed_fee_cents', 'proposed_hours', 'planned_pattern', 'planned_half_days', 'cover_note', 'boost', 'status', 'gate_result', 'is_demo', ...T],
    contracts: ['id', 'brief_id', 'bid_id', 'client_id', 'student_id', 'fee_cents', 'platform_fee_cents', 'student_net_cents', 'scoped_hours', 'deadline', 'status', 'student_signed_at', 'client_signed_at', 'student_signature_name', 'client_signature_name', 'governing_law', 'delivery_note', 'letter_html', 'pdf_ready', 'is_demo', ...T],
    escrow: ['id', 'contract_id', 'amount_cents', 'status', 'method', 'funded_at', 'release_requested_at', 'released_at', 'reference', 'is_demo', ...T],
    hour_log: ['id', 'contract_id', 'student_id', 'work_date', 'hours', 'note', 'day_type', 'counted_in_year', 'is_demo', ...T],
    day_account: ['id', 'student_id', 'year', 'full_days_used', 'half_days_used', 'weekly_hours_cache', 'note', 'is_demo', ...T],
    saved_briefs: ['id', 'user_id', 'brief_id', ...T],
  },
  'kontrak_comms.xlsx': {
    messages: ['id', 'contract_id', 'sender_id', 'recipient_id', 'body', 'sent_at', 'read_at', 'is_demo', ...T],
    notifications: ['id', 'user_id', 'type', 'text', 'link', 'read_at', 'is_demo', ...T],
    reviews: ['id', 'contract_id', 'from_user_id', 'to_user_id', 'stars', 'text', 'is_demo', ...T],
  },
  'kontrak_site.xlsx': {
    waitlist: ['id', 'email', 'role', 'city_or_university', 'source', 'consent', ...T],
    university_requests: ['id', 'university', 'contact_name', 'contact_email', 'role', 'message', ...T],
    checker_runs: ['id', 'permit_type', 'days_used', 'week_hours', ...T],
    interview_notes: ['id', 'interviewee_type', 'date', 'key_quote', 'insight', 'is_demo', ...T],
  },
  'kontrak_config.xlsx': {
    config: ['id', 'key', 'value', 'valid_from', 'note', ...T],
    audit_log: ['id', 'actor_id', 'action', 'entity', 'entity_id', 'detail', 'at', ...T],
  },
};

// Prefixes for generated IDs. Contracts use KTK-<year>-<nnnn>.
const PREFIX = { users: 'U', briefs: 'B', bids: 'BID', escrow: 'ESC', hour_log: 'H', messages: 'M', notifications: 'N', reviews: 'R', waitlist: 'W', university_requests: 'UR', checker_runs: 'CR', interview_notes: 'IN', config: 'CFG', audit_log: 'A', sessions: 'SES', saved_briefs: 'SV' };

const tables = {};       // name -> array of row objects
const fileOf = {};       // table name -> workbook file
for (const [file, sheets] of Object.entries(SCHEMA)) for (const name of Object.keys(sheets)) { fileOf[name] = file; tables[name] = []; }

export const nowISO = () => new Date().toISOString();

function cellValue(v) {
  if (v == null) return '';
  if (v instanceof Date) return v.toISOString();
  if (typeof v === 'object') {
    if ('result' in v) return cellValue(v.result);
    if ('richText' in v) return v.richText.map((t) => t.text).join('');
    if ('text' in v) return String(v.text);
    return JSON.stringify(v);
  }
  return v;
}

async function readWorkbook(file) {
  const full = path.join(DATA_DIR, file);
  if (!fs.existsSync(full)) return false;
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(full);
  for (const name of Object.keys(SCHEMA[file])) {
    const ws = wb.getWorksheet(name);
    tables[name] = [];
    if (!ws) continue;
    const headers = [];
    ws.getRow(1).eachCell({ includeEmpty: false }, (c, col) => { headers[col] = String(cellValue(c.value)).trim(); });
    ws.eachRow({ includeEmpty: false }, (row, i) => {
      if (i === 1) return;
      const obj = {};
      for (const col of SCHEMA[file][name]) obj[col] = '';
      row.eachCell({ includeEmpty: false }, (c, col) => { if (headers[col]) obj[headers[col]] = cellValue(c.value); });
      if (Object.values(obj).some((v) => v !== '' && v != null)) tables[name].push(obj);
    });
  }
  return true;
}

const WIDE = { description: 60, scope_deliverable: 60, body: 60, letter_html: 40, text: 50, cover_note: 50, detail: 60, insight: 50, key_quote: 50, message: 50, gate_result: 50, bio: 50, permit_wording_note: 40, note: 40, title: 44, password_hash: 24, token_hash: 24, email: 30, university_email: 30 };

function buildWorkbook(file) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Kontrak prototype';
  wb.created = new Date();
  for (const [name, cols] of Object.entries(SCHEMA[file])) {
    const ws = wb.addWorksheet(name, { views: [{ state: 'frozen', ySplit: 1 }] });
    ws.columns = cols.map((c) => ({ header: c, key: c, width: WIDE[c] || Math.max(12, Math.min(28, c.length + 6)) }));
    for (const row of tables[name]) {
      const out = {};
      for (const c of cols) {
        let v = row[c];
        if (typeof v === 'string' && v.length > 32000) v = v.slice(0, 32000); // Excel cell limit
        out[c] = v === undefined ? '' : v;
      }
      ws.addRow(out);
    }
    const header = ws.getRow(1);
    header.height = 22;
    header.eachCell((cell) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0D1B2A' } };
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, name: 'Calibri', size: 11 };
      cell.alignment = { vertical: 'middle' };
      cell.border = { bottom: { style: 'thin', color: { argb: 'FFC8922A' } } };
    });
    ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: cols.length } };
  }
  return wb;
}

// ── Write queue ─────────────────────────────────────────────
let chain = Promise.resolve();
const timers = {};
const dirty = new Set();
const lastWriteMtime = {};

function enqueue(fn) { chain = chain.then(fn, fn).catch((e) => console.error('[store] write failed:', e.message)); return chain; }

async function writeFile(file) {
  dirty.delete(file);
  const full = path.join(DATA_DIR, file);
  const tmp = full + '.tmp';
  const wb = buildWorkbook(file);
  await wb.xlsx.writeFile(tmp);
  try {
    fs.renameSync(tmp, full);
  } catch (e) {
    // Windows locks a workbook that is open in Excel. Keep the change in memory and retry.
    dirty.add(file);
    console.error(`[store] ${file} is locked (open in Excel?). Will retry in 3 s.`);
    setTimeout(() => schedule(file), 3000);
    return;
  }
  lastWriteMtime[file] = fs.statSync(full).mtimeMs;
}

function schedule(file) {
  dirty.add(file);
  clearTimeout(timers[file]);
  timers[file] = setTimeout(() => enqueue(() => writeFile(file)), 200);
}

export function touch(table) { schedule(fileOf[table]); }

export async function flushAll() {
  for (const f of Object.keys(timers)) clearTimeout(timers[f]);
  const files = [...dirty];
  for (const f of files) enqueue(() => writeFile(f));
  await chain;
}

// ── Load and external edits ─────────────────────────────────
export async function load() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const missing = [];
  for (const file of Object.keys(SCHEMA)) {
    const ok = await readWorkbook(file);
    if (!ok) missing.push(file);
    else lastWriteMtime[file] = fs.statSync(path.join(DATA_DIR, file)).mtimeMs;
  }
  return missing;
}

/** Re-read the config workbook when someone edits it in Excel while the server runs. */
export function watchConfig(onReload) {
  const file = 'kontrak_config.xlsx';
  const full = path.join(DATA_DIR, file);
  fs.watchFile(full, { interval: 2000 }, async (cur) => {
    if (!cur.mtimeMs || cur.mtimeMs === lastWriteMtime[file] || dirty.has(file)) return;
    try {
      await readWorkbook(file);
      lastWriteMtime[file] = cur.mtimeMs;
      console.log('[store] kontrak_config.xlsx changed on disk. Rules reloaded.');
      onReload && onReload();
    } catch (e) { console.error('[store] could not re-read config:', e.message); }
  });
}

export function resetAll() { for (const name of Object.keys(tables)) tables[name] = []; }
export async function writeAllNow() { for (const file of Object.keys(SCHEMA)) await enqueue(() => writeFile(file)); }

// ── Table API ───────────────────────────────────────────────
export const all = (t) => tables[t];
export const find = (t, pred) => tables[t].find(pred);
export const filter = (t, pred) => tables[t].filter(pred);
export const get = (t, id) => tables[t].find((r) => r.id === id);

export function nextId(t, { year } = {}) {
  if (t === 'contracts') {
    const y = year || new Date().getFullYear();
    const n = tables.contracts.filter((r) => String(r.id).startsWith(`KTK-${y}-`)).map((r) => Number(String(r.id).split('-')[2]) || 0);
    return `KTK-${y}-${String((n.length ? Math.max(...n) : 0) + 1).padStart(4, '0')}`;
  }
  const p = PREFIX[t] || t.slice(0, 3).toUpperCase();
  const n = tables[t].map((r) => Number(String(r.id).split('-').pop()) || 0);
  return `${p}-${String((n.length ? Math.max(...n) : 0) + 1).padStart(4, '0')}`;
}

export function insert(t, row) {
  const cols = SCHEMA[fileOf[t]][t];
  const now = nowISO();
  const full = {};
  for (const c of cols) full[c] = '';
  Object.assign(full, row);
  if (!full.id) full.id = nextId(t);
  full.created_at = full.created_at || now;
  full.updated_at = now;
  tables[t].push(full);
  touch(t);
  return full;
}

export function update(t, id, patch) {
  const row = get(t, id);
  if (!row) return null;
  Object.assign(row, patch, { updated_at: nowISO() });
  touch(t);
  return row;
}

export function remove(t, pred) {
  const before = tables[t].length;
  tables[t] = tables[t].filter((r) => !pred(r));
  if (tables[t].length !== before) touch(t);
}

export const bool = (v) => v === true || v === 'true' || v === 1 || v === '1' || v === 'TRUE';
export const numv = (v) => (v === '' || v == null ? 0 : Number(v));
