const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');

test('submitting an issue reveals it when another category was selected', () => {
  const script = readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
  const elements = new Map();
  const makeElement = () => ({
    value: '', textContent: '', innerHTML: '', children: [],
    appendChild(child) { this.children.push(child); },
    addEventListener(type, handler) { this[type] = handler; },
    classList: { add() {}, toggle() {} },
  });
  const buttons = ['all', 'Road', 'Water'].map(filter => ({
    tagName: 'BUTTON', dataset: { f: filter }, classList: { toggle() {} },
    setAttribute(name, value) { this[name] = value; },
  }));
  const document = {
    createElement: makeElement,
    querySelectorAll() { return buttons; },
    getElementById(id) { if (!elements.has(id)) elements.set(id, makeElement()); return elements.get(id); },
  };
  runInNewContext(script, { document, alert() {} });
  document.getElementById('filters').click({ target: buttons[1] });
  assert.equal(buttons[1]['aria-pressed'], 'true');
  document.getElementById('descInput').value = 'Water pipe leak at Cedar Terrace';
  document.getElementById('submitBtn').click();
  assert.equal(buttons[0]['aria-pressed'], 'true');
  assert.equal(buttons[1]['aria-pressed'], 'false');
  assert.ok(document.getElementById('issueList').children.some(child => child.innerHTML.includes('Water pipe leak at Cedar Terrace')));
});
