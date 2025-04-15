import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useCallback to prevent re-creation of the handleClick function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only recreate the function if 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
