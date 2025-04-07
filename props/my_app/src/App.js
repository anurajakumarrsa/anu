import React from 'react'
import One from "./components/One"


import { useState } from 'react'
const App=()=>{
    const [color1,setColor1]= useState("black")
    const handleclick=()=>{
        setColor1('black' ? 'red':'black' )
    }
    return(
        <>
                <One change={color1}/>
    
        <button onClick={handleclick} >click</button>
        </>
    )
}
export default App

