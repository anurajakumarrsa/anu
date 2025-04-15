import React from 'react'
import { useState } from 'react'
import axios from "axios"
const App = () => {
  const[Value,setValue]=useState('')
  const [Type,setType]=useState('')
  const [Num,setNum]=useState(3)

  const handle_click=(e)=>{
    e.preventDefault()
    const user={
      title:Value,
      body:Type,
      id:Num
    }
  
  axios.post("http://localhost:3001/posts",user).then(response=>{
      setValue('')
      setType('')
      setNum(Num+1)
      console.log(response.data)
    })
  }
  return (
    <>
    <form > 
      <input type='text' onChange={(e)=>setValue(e.target.value)}></input>
      <input type='text'  onChange={(e)=>setType(e.target.value)}></input>
      <button onClick={handle_click}>click</button>
    </form>
    
    </>
    
  )
}

export default App
