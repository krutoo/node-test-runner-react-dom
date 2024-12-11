import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('CLICK');
    setCount(n => n + 1);
  };

  console.log('RENDER');

  return (
    <div data-testid='counter' onClick={handleClick}>
      Count: {count}
    </div>
  );
}
