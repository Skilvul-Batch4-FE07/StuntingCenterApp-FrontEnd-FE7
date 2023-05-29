// Register.js

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleRegister = e => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
