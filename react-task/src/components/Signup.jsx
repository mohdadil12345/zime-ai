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
  const [errors, seterror] = useState({})
  const nav = useNavigate()


  const handle_chnage = (e) => {
     const {name, value} = e.target
     let obj = {...formdata}
     obj[name] = value
    //  console.log("obj", obj)
     setformdata(obj)

         // Remove error message  after giving input
    if (name === "username") {
      seterror({ ...errors, [name]: "" });
    }

    if(name == "email") {
      seterror({...errors, [name] : ""})
    }

    if(name == "password"){
        seterror({...errors, [name] : ""})
    }

  }

const handle_form = (e) => {
   e.preventDefault()
    // console.log("adil")
    // console.log(formdata)

    const validnErrors = {}

    // username
    if(!formdata.username.trim()){
      validnErrors.username = "username is required"
    }else if (!/^[a-zA-Z0-9]+$/.test(formdata.username)) {
      validnErrors.username = "Username should only contain alphabets and numbers";
    }
  
    // email
    if(!formdata.email.trim()) {
      validnErrors.email = "email is required"
    }else if(!/\S+@\S+\.\S+/.test(formdata.email)){
       validnErrors.email = "email is not valid"
    }
  
    // password
    if(!formdata.password) {
      validnErrors.password = "password is required"
    }else if (formdata.password.length < 6) {
       validnErrors.password = "password should atleast 6 char"
    }
  

  
    seterror(validnErrors)
  
  
    if(Object.keys(validnErrors).length == 0) {
  
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


    // setformdata(intistate)

    let lsadata = JSON.parse(localStorage.getItem("regData"))

    if(lsadata) {
      lsadata.push(formdata)
    localStorage.setItem("regData", JSON.stringify(lsadata))

    }else{

      localStorage.setItem("regData", JSON.stringify([formdata]))
    }

    // toast.success("Registration successfull!", {
    //     style: {
    //       borderRadius: "50px",
    //       background: "#000428",
    //       color: "#ffffff",
    //       padding: "1rem 1.5rem",
    //       fontWeight: "600",
    //     },
    //   });
    // nav("/login")
    
  
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
        {errors.username && <span>{errors.username}</span>}

      <label>Email : </label>
        <input onChange={(e) => handle_chnage(e)} name='email' value={email} type="email" placeholder='email' />
        {errors.email  && <span>{errors.email}</span>}

      <label>Password :</label>
        <input onChange={(e) => handle_chnage(e)} name='password' value={password} type="password" placeholder='password' />
        {errors.password && <span>{errors.password}</span>}

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