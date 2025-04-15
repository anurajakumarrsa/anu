import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const First = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()
    const validemail = "anu@gmail.com"
    const validpassword = "anu"
    const page = (e) =>{
        e.preventDefault()
        if(email===validemail && password===validpassword){
            navigate("/Two")
        }
        else
        {
            alert("Incorrect email or password")
        }
    }
  return (
    <>
    Email:<input type='text' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    Password:<input type='password' onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
    <button onClick={page}>Submit</button>
    </>
     
  )
}

export default First