import React, { useReducer } from 'react';

// Reducer function
function reducer(state) {
  return { count: state.count + 1 }; // Increment count
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={dispatch}>Increment</button>
    </div>
  );
}

export default App;
