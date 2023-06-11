import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Login from '../components/FormLogin'
import Register from '../components/FormRegister'
import BmiCalculator from '../components/bmicalculator'


const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bmicalculator' element={<BmiCalculator/>} />
      </Routes>
    </Router>
  )
}

export default RouterComponent
