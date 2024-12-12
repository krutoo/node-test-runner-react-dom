import { useState } from 'react';

export function CaptionField() {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input data-testid='field' value={value} onChange={handleChange} />
      <span data-testid='caption'>{value}</span>
    </>
  );
}
