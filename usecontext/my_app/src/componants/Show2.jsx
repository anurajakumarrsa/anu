import {React,useContext} from 'react'
import {Theme} from "./Main1"
const Show = () => {
    const themes=useContext(Theme)
  return (
    <p>Name:{themes}</p>
  )
}

export default Show