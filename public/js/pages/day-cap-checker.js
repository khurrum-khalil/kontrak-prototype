import { boot } from '../chrome.js';
import { $ } from '../ui.js';
import { mountChecker } from '../checker-widget.js';

mountChecker($('#checker'));
await boot({ shell: 'site' });
