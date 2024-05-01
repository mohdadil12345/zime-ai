import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/"}>PostsData</Link>
        <button>Login</button>
    </div>
  )
}

export default Navbar