const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');

test('submission clearly reports that the example is local', () => {
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /not sent to any authority/);
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const elements = new Map();
  const element = () => ({ value: '', innerHTML: '', textContent: '', children: [],
    appendChild(x) { this.children.push(x); }, addEventListener(type, fn) { this[type] = fn; },
    classList: { add() {}, remove() {} },
  });
  const document = { createElement: element, querySelectorAll() { return []; },
    getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); } };
  document.getElementById('descInput').value = 'Road damage';
  runInNewContext(script, { document, setTimeout: fn => fn(), alert() {} });
  document.getElementById('submitBtn').click();
  assert.match(document.getElementById('aiText').textContent, /has not been sent to a department/);
  assert.match(document.getElementById('aiText').textContent, /disappear when the page reloads/);
});
