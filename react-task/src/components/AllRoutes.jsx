import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts'
import Signup from './Signup'
import Login from './Login'
import PrivateRoutes from './PrivateRoute'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={  <PrivateRoutes>

              <Posts/>
            </PrivateRoutes> }/>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
           
        </Routes>
    </div>
  )
}

export default AllRoutes