

import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const User = () => {

    const color=useContext(ThemeContext)

    const textStyle = {
        background: color === "light" ? "white" : "black",
        color: color === "light" ? "black" : "white"
    }

    return (
        <>
            <h4 style={textStyle}>User comp</h4>
        </>
    )
}

export default User
