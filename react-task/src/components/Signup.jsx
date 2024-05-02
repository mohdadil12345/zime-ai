import { Button } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

let intistate = {
  username : "",
  email : "", 
  password : ""
}

function Signup() {

  const [formdata, setformdata] = useState(intistate)
  const nav = useNavigate()


  const handle_chnage = (e) => {
     const {name, value} = e.target
     let obj = {...formdata}
     obj[name] = value
    //  console.log("obj", obj)
     setformdata(obj)

  }

const handle_form = (e) => {
   e.preventDefault()
    // console.log("adil")
    console.log(formdata)

    setformdata(intistate)

    let lsadata = JSON.parse(localStorage.getItem("regData"))

    if(lsadata) {
      lsadata.push(formdata)
    localStorage.setItem("regData", JSON.stringify(lsadata))

    }else{

      localStorage.setItem("regData", JSON.stringify([formdata]))
    }

    toast.success("Registration successfull!", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    nav("/login")
    
  
}


const gotologinform = () => {
  nav("/login")
}

const {username, email, password} = formdata

  return (

    <div className='signup'>
    <h1>Registration</h1>


      <form onSubmit={(e) => handle_form(e)} className="signupform">
      <label>username :</label>
        <input onChange={(e) => handle_chnage(e)}  name='username' value={username} type="text" placeholder='username' />

      <label>Email : </label>
        <input onChange={(e) => handle_chnage(e)} name='email' value={email} type="email" placeholder='email' />

      <label>Password :</label>
        <input onChange={(e) => handle_chnage(e)} name='password' value={password} type="password" placeholder='password' />

         <div className='signbtn_div'>
         <button className='signbtn' type='submit'>SIGNUP</button>
         </div>
      </form>
      <p onClick={gotologinform}>
       Already Register Please login
      </p>
    </div>

  )
}

export default Signup