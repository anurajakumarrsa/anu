import React from 'react';
import {useNavigate} from "react-router-dom";
const Home =()=>{
    const navigate =useNavigate();
    const page =()=>{
        navigate("/")
    }
    return(
        <button onClick={page}>about </button>
    )
}
export default Home 
