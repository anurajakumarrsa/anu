import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div style={{backgroundColor:"aqua",height:"80px"}}>
      <Link to="/" style={{marginLeft:"1100px"}}>HOME</Link>
      <Link to="/Two" style={{marginLeft:"20px"}}>ABOUT</Link>
      <Link to="/Three" style={{marginLeft:"20px"}}>CONTACT</Link>
      <Link to="/Four"  style={{marginLeft:"20px"}}>PORTFOLIO</Link>
    </div>
  )
}

export default Header