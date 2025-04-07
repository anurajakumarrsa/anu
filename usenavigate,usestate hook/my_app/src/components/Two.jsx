import React from 'react';
import {useNavigate} from "react-router-dom";
const App =()=>{
    const navigate =useNavigate();
    const page =()=>{
        navigate("/One")
    }
    return(
        <button onClick={page}>click</button>
    )
}
export default App
