import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Login from '../pages/LoginPage'

import Register from '../pages/RegisterPage'
import Homepage from '../pages/HomePage'

const RouterComponent = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  )
}

export default RouterComponent
