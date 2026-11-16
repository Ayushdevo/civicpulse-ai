const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');

test('report and location markup is rendered as text', () => {
  const html = readFileSync('index.html', 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const elements = new Map();
  const createElement = () => ({
    innerHTML: '', textContent: '', children: [],
    appendChild(child) { this.children.push(child); },
    addEventListener() {}, classList: { add() {}, remove() {} },
  });
  const document = {
    createElement,
    getElementById(id) { if (!elements.has(id)) elements.set(id, createElement()); return elements.get(id); },
    querySelectorAll() { return []; },
  };
  const result = runInNewContext(`${script}\nissues.length = 0; issues.push({desc: '<img src=x onerror=alert(1)>', loc: '<svg onload=alert(1)>', time: 'now', ai: classify('road')}); render(); document.getElementById('issueList').children.at(-1).innerHTML`, { document });
  assert.doesNotMatch(result, /<img|<svg/);
  assert.match(result, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(result, /&lt;svg onload=alert\(1\)&gt;/);
});
