import React, { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cek localStorage saat komponen dipasang
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login user
  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      const userData = {
        email: response.data.email,
        token: response.data.token,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Registrasi user
  const register = async (email, password) => {
    try {
      const response = await registerUser(email, password);
      const userData = {
        email: response.data.email,
        token: response.data.token,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
