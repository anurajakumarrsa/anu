
import React, { useState, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Memoizing the square of the count
  const square= useMemo(() => count * count , [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>square: {square}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
