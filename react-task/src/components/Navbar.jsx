import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import zime from "../assets/zime.webp"
import { authval } from './AuthContextProvider';

function Navbar() {

  const [show, setshow] = useState(false)
  const { login, logout, user } = useContext(authval);
  const navig = useNavigate()

  const menu_btn = () => {
    setshow(!show)
 }
 

 const handle_logout = () => {
  logout()
  alert("logout successfull")
  navig("/login")
}



  return (
    <div className="navbar">
    <div className="logo">
        <img src={zime} alt="" />
    </div>

    <div className={`menu ${show ? "open" : "close" }`}>

        <Link to={"/"}>Posts</Link>

        {/* {user.isAuth ? <p onClick={handle_logout}>LOGOUT</p> :  
         <Link to={"/login"}>Login</Link>} */}
     
   
    </div>

    <div className="btn">
   
      {user.isAuth ? <p onClick={handle_logout}><button>LOGOUT</button></p> :  
         <Link to={"/login"}><button>Login</button></Link>}
    <button className="mnbtn" onClick={menu_btn}> {!show ? "🎫" : "❌" }` </button>
    </div>
  </div>  
  )
}

export default Navbar