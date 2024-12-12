import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fireEvent, render } from '@testing-library/react';
import { CaptionField } from './caption-field.js';

test('Should render caption', () => {
  const { getByTestId } = render(<CaptionField />);

  const field = getByTestId('field') as HTMLInputElement;
  const caption = getByTestId('caption');

  assert.equal(field.value, '');
  assert.equal(caption.textContent, '');

  fireEvent.change(field, { target: { value: 'something' } });
  assert.equal(field.value, 'something');
  assert.equal(caption.textContent, 'something');
});
