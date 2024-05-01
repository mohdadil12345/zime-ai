import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Posts/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes