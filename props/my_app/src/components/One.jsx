import React from 'react'
import Two from "./Two"

const One = ({change}) => {
  return (
    <>
         <h1>one</h1>
         <Two color2={change}/>
    </>
  )
}

export default One
