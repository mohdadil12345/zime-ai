import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

import zime from "../assets/zime.webp"
import { authval } from './AuthContextProvider';

function Navbar() {

  const [show, setshow] = useState(false)
  // const { login, logout, user } = useContext(authval);
  const navig = useNavigate()
  

  const menu_btn = () => {
    setshow(!show)
 }
 

//  const handle_logout = () => {
//   logout()
//   toast.success("Logout Successfull!", {
//     style: {
//       borderRadius: "50px",
//       background: "#000428",
//       color: "#ffffff",
//       padding: "1rem 1.5rem",
//       fontWeight: "600",
//     },
//   });
//   navig("/login")
//   setshow(!show)
// }

// const handle_alert = () => {
//     if(!user.isAuth ){
//       toast.error("Please login first", {
//         style: {
//           borderRadius: "50px",
//           background: "#000428",
//           color: "#ffffff",
//           padding: "1rem 1.5rem",
//           fontWeight: "600",
//         },

//       });
//       navig("/login")
//       setshow(!show)
//     } else if(user.isAuth ){
//       navig("/")
//       setshow(!show)
//     }
// }



  return (
    <div className="navbar">
      
    <div className="logo">
        <img src={zime} alt="" />
    </div>

    <div className={`menu ${show ? "open" : "close" }`}>

        <Link to={"/"} style={{color:"white"}}>Posts</Link>

        {/* {user.isAuth &&  <div className='name'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          <span>{user.username}</span>
        </div> } */}

    
        {/* {user.isAuth ? <button id='btnsame' >LOGOUT</button> :  
         <Link to={"/login"}><button id='btnsame' >Login</button></Link>}
      */}
   
    </div>

    <div className="btn">
   
     
    <button className="mnbtn" onClick={menu_btn}> {!show ? "🎫" : "❌" }` </button>
    </div>

  </div>  
  )
}

export default Navbar