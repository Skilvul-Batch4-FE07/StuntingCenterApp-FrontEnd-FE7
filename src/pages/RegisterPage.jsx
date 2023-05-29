import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/FormRegister'
import { register } from '../features/authSlice'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = user => {
    // logic
    dispatch(register(user))

    // navigate ke dashbord
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Register Page</h1>
      <RegisterForm navigate={navigate} onRegister={handleRegister} />
    </div>
  )
}

export default RegisterPage
