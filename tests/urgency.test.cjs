const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');
const script = readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)const issues =/)[1];
const classify = runInNewContext(`${script}\nclassify`);

test('urgency words are not matched inside unrelated words', () => {
  for (const report of ['A bonfire decoration', 'Hospitality information', 'A fireproof box']) {
    assert.equal(classify(report).urgency, 'low');
  }
});

test('explicit hazards, related word forms and medium signals remain recognized', () => {
  for (const report of ['fire on the road', 'an injured person', 'dangerous structure', 'a gas leak near schools']) {
    assert.equal(classify(report).urgency, 'high');
  }
  assert.equal(classify('broken lights').urgency, 'medium');
});
