import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import zime from "../assets/zime.webp"

function Navbar() {

  const [show, setshow] = useState(false)

  const menu_btn = () => {
    setshow(!show)
 }
 


  return (
    <div className="navbar">
    <div className="logo">
        <img src={zime} alt="" />
    </div>

    <div className={`menu ${show ? "open" : "close" }`}>

        <Link to={"/"}>Posts</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
     
   
    </div>

    <div className="btn">
      <button>Login</button>
    <button className="mnbtn" onClick={menu_btn}> {!show ? "🎫" : "❌" }` </button>
    </div>
  </div>  
  )
}

export default Navbar