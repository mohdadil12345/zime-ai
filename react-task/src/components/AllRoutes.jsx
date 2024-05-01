import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts'
import PostData from './PostData'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/' element={<PostData/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes