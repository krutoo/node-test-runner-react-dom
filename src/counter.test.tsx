import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Counter } from './counter.js';
import { fireEvent, render } from '@testing-library/react';

test('Should render count and increment it by click', () => {
  const { getByTestId } = render(<Counter />);

  const counter = getByTestId('counter')!;
  assert.equal(counter.textContent, 'Count: 0');

  fireEvent.click(counter);
  assert.equal(counter.textContent, 'Count: 1');
});
