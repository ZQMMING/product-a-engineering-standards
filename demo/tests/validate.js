const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

const ids = [...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
const duplicateIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (duplicateIds.length) throw new Error(`Duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);
const idSet = new Set(ids);
const directRefs = new Set([...js.matchAll(/\$\('#([^']+)'\)/g)].map(m => m[1]));
const missingIds = [...directRefs].filter(id => !idSet.has(id));
if (missingIds.length) throw new Error(`Missing HTML IDs: ${missingIds.join(', ')}`);

const keys = new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]));
const boundaries = [
  ['  en: {', "  'zh-Hans':"],
  ["  'zh-Hans':", "  'zh-Hant':"],
  ["  'zh-Hant':", '\n};']
];
for (const [locale, [start, end]] of ['en','zh-Hans','zh-Hant'].map((l, i) => [l, boundaries[i]])) {
  const section = js.slice(js.indexOf(start), js.indexOf(end, js.indexOf(start)));
  const translated = new Set([...section.matchAll(/(?:^|[,\n])\s*([A-Za-z][A-Za-z0-9]*)\s*:/g)].map(m => m[1]));
  const missing = [...keys].filter(k => !translated.has(k));
  if (missing.length) throw new Error(`${locale} missing translations: ${missing.join(', ')}`);
}

const requiredA = ['id="birthForm"','id="workspace"','id="chart-bazi"','id="chart-ziwei"','id="chart-heluo"','id="report"','id="checkout"','id="methodology"'];
for (const fragment of requiredA) if (!html.includes(fragment)) throw new Error(`Missing Product A journey: ${fragment}`);
const forbiddenB = /NFC|bracelet|touch to begin|daily guidance|daily edition/i;
if (forbiddenB.test(html)) throw new Error('Product B / NFC language found in Product A UI.');
if (!css.includes('@media(prefers-reduced-motion:reduce)') && !css.includes('@media(prefers-reduced-motion: reduce)')) throw new Error('Reduced-motion support missing.');
if (!css.includes('hetuTurn') || !js.includes('motionToggle')) throw new Error('Hetu motion control missing.');
const palaceCount = (html.match(/class="palace-cell"/g) || []).length;
if (palaceCount !== 12) throw new Error(`Zi Wei chart must contain 12 palace cells, found ${palaceCount}.`);

const expected = {
  'assets/hetu-master.svg': '7bafbd74888912371660965896c81aa9e32e9475db545ffd1444c7d439e0bd28',
  'assets/liorin-logo-master.svg': '33b9c0dbababd0eabb16832da3c2936a94d0e8ebba53ecbfa70bde9bd68f8f4d'
};
for (const [file, hash] of Object.entries(expected)) {
  const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
  if (actual !== hash) throw new Error(`Original source asset changed: ${file}`);
}
console.log('LIORIN Product A web demo validation passed.');
console.log(`- ${ids.length} unique HTML IDs`);
console.log(`- ${keys.size} translated UI keys checked in EN / 简体 / 繁體`);
console.log('- Product A journey and no-NFC boundary checked');
console.log('- Original Hetu and logo SVGs verified byte-identical');
console.log('- Reduced-motion and controllable Hetu animation checked');
console.log('- Zi Wei chart contains exactly 12 palace cells');
