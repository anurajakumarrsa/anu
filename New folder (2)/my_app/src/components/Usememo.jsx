// import React, { useState, useMemo } from 'react';

// function SimpleExample() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("John");

//   // Memoizing an expensive calculation
//   const expensiveCalculatio = useMemo(() => {
//     console.log("Calculating...");
//     return count * 2;
//   }, [count]); // Only recalculates when 'count' changes

//   return (
//     <div>
//       <h1>Expensive Calculation Result: {expensiveCalculatio}</h1>
//       <p>Name: {name}</p>

//       <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
//       <button onClick={() => setName(name === "John" ? "anu" : "John")}>Change Name</button>
//     </div>
//   );
// }

// export default SimpleExample;



import React, { useState, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Memoizing the square of the count
  const cube = useMemo(() => count * count *count, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>cube: {cube}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
