import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/FormLogin'
import { login } from '../features/authSlice'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = user => {
    // ini tmpat logic
    dispatch(login(user))

    // navigate ke dashboard
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm navigate={navigate} onLogin={handleLogin} />
    </div>
  )
}

export default LoginPage
