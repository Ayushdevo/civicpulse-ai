const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');

const script = readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)const issues =/)[1];
const classify = runInNewContext(`${script}\nclassify`);

test('the same report gets the same classification and score', () => {
  const report = 'A dangerous pothole near the school gate';
  const first = JSON.stringify(classify(report));
  for (let i = 0; i < 100; i++) assert.equal(JSON.stringify(classify(report)), first);
});

test('priority bands remain ordered even with the detail boost', () => {
  const high = classify('fire');
  const medium = classify('broken ' + 'x'.repeat(400));
  const low = classify('x'.repeat(400));
  assert.equal(high.urgency, 'high');
  assert.equal(medium.urgency, 'medium');
  assert.equal(low.urgency, 'low');
  assert.ok(high.score > medium.score && medium.score > low.score);
});
