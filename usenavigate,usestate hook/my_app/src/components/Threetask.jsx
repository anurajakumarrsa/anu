import React from 'react';
import {useNavigate} from "react-router-dom";
const Home =()=>{
    const navigate =useNavigate();
    const page =()=>{
        navigate("/Fourtask")
    }
    return(
        <button onClick={page}>home</button>
    )
}
export default Home
