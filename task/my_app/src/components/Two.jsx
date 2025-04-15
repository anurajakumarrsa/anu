import React from 'react';
import {useNavigate} from "react-router-dom";
import img from "../asset/image/img.jpg"
const Second = () => {
    const navigate = useNavigate();
    const page = () =>
    {
        navigate("/One")
    }
    return(
        <>
       
        <button onClick={page}>Back</button> <br></br>
        <img src={img} alt='' />
        </>
        
    )
}
export default Second