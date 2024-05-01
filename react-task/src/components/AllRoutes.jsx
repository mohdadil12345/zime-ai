import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts'
import Signup from './Signup'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes