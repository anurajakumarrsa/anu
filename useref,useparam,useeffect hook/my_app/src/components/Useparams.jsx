import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    let{id}=useParams();
  return (
    <div>About
        <h1> User Id-{id}</h1>
    </div>
  )
}

export default About