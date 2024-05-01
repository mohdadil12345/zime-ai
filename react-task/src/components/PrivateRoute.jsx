import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authval } from './AuthContextProvider'

function PrivateRoutes({children}) {

const {user} = useContext(authval)
const location = useLocation()

if(user.isAuth == false){
    return <Navigate state = {location.pathname}  to="/login"/>
}

  return (
    <div>
     {children}
    </div>
  )
}

export default PrivateRoutes