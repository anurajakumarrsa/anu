
// import React from 'react'
// import { useEffect } from 'react'

// const App = () =>{
//     useEffect(()=>{
//     console.log("hello")
// },[])

// return(
//     <></>
// )}
    
    
// export default App  



// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component Rendered!");
//   },[count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// };

// export default App;


// import React from 'react'
// import { useEffect } from 'react';

// const Run_once = () => {
//     useEffect(() => {
//         // console.log("Component mounted!");
      
//         return () => {
//           console.log("Component unmounted!");
//         };
//       }, []);
      
//   return (
//     <>
//     </>
//   )
// }

// export default Run_once




// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log(`Count: ${count}, Name: ${name}`);
//   }, [count, name]); 

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//     </div>
//   );
// };

// export default App;




// import React, { useEffect } from "react";

// const Timer = () => {
//   useEffect(() => {
//     console.log("Timer started...");

//     const interval = setInterval(() => {
//       console.log("Timer running...");
//     }, 1000);

//     return () => { 
//       clearInterval(interval);
//       console.log("Cleanup: Timer Stopped!");
//     };
//   },[]);

//   return <h1>Timer Running...</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// };

// export default App;






import React, { useEffect, useState } from "react";

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(interval);  
      console.log("Timer stopped!");
    };
  },[]);

  return <h1>Timer Running...</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      {show && <Timer />}
    </div>
  );
};
export default App;