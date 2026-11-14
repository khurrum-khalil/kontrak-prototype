import { boot } from '../chrome.js';
import { $ } from '../ui.js';
import { mountRoadmap } from '../roadmap.js';

mountRoadmap($('#roadmap'));
await boot({ shell: 'site' });
