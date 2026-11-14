// Roadmap "Plus features" from the pitch. Shown as roadmap only. None of these are built.
import { icon, esc } from './ui.js';

export const ROADMAP = [
  ['house', 'Work-from-home track', 'For parents, carers and stay-at-home spouses. Same contracts, same escrow, same eligibility check, because work rights depend on residence status.'],
  ['timer', 'Micro-briefs', 'Short, hour-capped tasks that fit around lectures and family time.'],
  ['languages', 'Language briefs', 'Translation and German-English document work.'],
  ['file-check', 'Verified work record', 'Verified hours and contracts you can take with you.'],
  ['graduation-cap', 'Path to Werkstudent roles', 'Repeat work with one client can lead to a Werkstudent position.'],
];

export function mountRoadmap(el) {
  el.innerHTML = ROADMAP.map(([ic, title, text]) => `<div class="card card-sm roadmap-card">
    <div class="between">${icon(ic, 22)}<span class="badge badge-warning" data-i18n="roadmap.tag">Roadmap, not built yet</span></div>
    <h3 class="title mt-12">${esc(title)}</h3><p class="small muted mt-8">${esc(text)}</p></div>`).join('');
}
