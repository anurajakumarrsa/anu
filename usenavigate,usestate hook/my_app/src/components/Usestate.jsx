// import React from 'react'
// const App = () => {
//     let a=1
//     const handleclick=()=>{
//         a=a+1
//         console.log(a)
//     }
//   return (
//     <>
//     <p>{ a}</p>
//     <button onClick={handleclick}>click</button>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import {useState} from "react"
// const App = () => {
//     const [value,setvalue]=useState(0)
    
//     const handleclick=()=>{
//         setvalue(value+1)
        
//     }
//   return (
//     <>
//     <p>{ value}</p>
//     <button onClick={handleclick}>click</button>
//     </>
//   )
// }
// export default App

// import React from 'react'
// import {useState} from "react"
// const App = () => {
//     const [value,setvalue]=useState(0)
    
//     const handleclick=()=>{
//         setvalue(value+1)
//          }
//          const handleclick1=()=>{
//             setvalue(value-1)
//              }
//   return (
//     <>
//     <p>{ value}</p>
//     <button onClick={handleclick}>+</button>
//     <button onClick={handleclick1}>-</button>
//     </>
//   )
// }
// export default App




// import React from 'react'
// import {useState} from "react"
// const App = () => {
//     const [value,setvalue]=useState("change Text")
    
//     const handleclick=()=>{
//         setvalue("hello")
//      }
//   return (
//     <>
//     <p>{value}</p>
//     <button onClick={handleclick}>click</button>
//     </>
//   )
// }
// export default App




// import { useState } from "react";

// const Fruits = () => {
//   const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

//   const addFruit = () => {
//     setFruits([...fruits,"mango","kiwi"]);
//   };

//   return (
//     <div>
//       <h2>Fruits List:</h2>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add </button>
//     </div>
//   );
// };

// export default Fruits;


// import React, { useState } from 'react';
// const InputDisplay = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value); 
//     console.log("hello")
//   };
//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//         placeholder="Type something" 
//       />
//       <h1>{inputValue}</h1> 
//     </div>
//   );
// };
// export default InputDisplay;


// import React, { useState } from 'react';
// const InputDisplay = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [outputValue, setoutputValue] =useState('')

//   const handleChange = (event) => {
//     setInputValue(event.target.value); 
//   };
//   const handleClick = () =>{
//      setoutputValue(inputValue)
//   }
// return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//         placeholder="Type something" 
//       />
//       <button onClick={handleClick}>Enter</button>
//       <h1>{outputValue}</h1> 
//     </div>
//   );
// };
// export default InputDisplay;


//list the value

import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => setNewItem(e.target.value);

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem(''); 
    }
  };

  return (
    <div>
      <h3>Shopping List</h3>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;


//two input,one button to show the value

// import React, { useState } from 'react';

// const UserForm = () => {
//   const [user, setUser] = useState({ name: '', age: '' });
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (user.name && user.age) {
//       setSubmittedData(user);
//       setUser({name:"",age:""})
      
//     } else {
//       alert('Please enter both Name and Age');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>User Form</h2>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}/>
//       </div>
//       <div>
//         <label>Age:</label>
//         <input
//           type="number"
//           name="age"
//           value={user.age}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//       {submittedData && (
//         <div>
//           <h3>Submitted Data:</h3>
//           <p>Name: {submittedData.name}</p>
//           <p>Age: {submittedData.age}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserForm;