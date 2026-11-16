const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');
const script = readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)const issues =/)[1];
const classify = runInNewContext(`${script}\nclassify`);

test('specific hazard phrases beat generic words in category ties', () => {
  assert.equal(classify('gas leak near the station').category, 'Safety');
  assert.equal(classify('water pipe leak').category, 'Water');
});

test('category matches respect word boundaries and common plurals', () => {
  assert.equal(classify('a broad daylight view').category, 'General');
  assert.equal(classify('potholes near a junction').category, 'Road');
  assert.equal(classify('exposed wires').category, 'Electrical');
  assert.equal(classify('streetlight outage').category, 'Electrical');
});
