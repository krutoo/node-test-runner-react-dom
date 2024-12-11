import assert from 'node:assert/strict';
import { test } from 'node:test';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './counter.js';

test('Should render count and increment it by click', () => {
  // prepare
  const container = document.createElement('div');
  document.body.append(container);

  act(() => {
    createRoot(container).render(<Counter />);
  });

  const counter = container.querySelector('[data-testid="counter"]')!;
  assert.equal(counter.textContent, 'Count: 0');

  act(() => {
    counter.dispatchEvent(new MouseEvent('click'));
  });
  assert.equal(counter.textContent, 'Count: 1');

  // cleanup
  container.remove();
});
