import React, { createContext, useState } from 'react'
import One from "./Show1"
export const Theme = createContext()
const Main = () => {

    const[values,setValues]=useState('')
    const[text,setText]=useState('')
    const handleclick=(e)=>
    {
        setValues(e.target.value)

    }
    const handleclicks=()=>{
        setText(values)
    }
    return (
        <div>
        <input type="text" value={values} onChange={handleclick}/>
        <button onClick={handleclicks}>Click</button>
        <Theme.Provider value={text}>
        <One/>
        </Theme.Provider>
        

        </div>
    )
}
export default Main