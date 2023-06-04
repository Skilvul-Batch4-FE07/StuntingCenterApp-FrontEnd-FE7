import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { Envelope, Lock, Eye, EyeSlash } from 'react-bootstrap-icons';
import imgSide from '../assets/icon_bg.png';
import imgBg from '../assets/bg-logreg.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { saveUserToApi, getUserFromApi } from '../utils/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/homepage');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loggedInUser = await getUserFromApi(email, password);
    if (loggedInUser) {
      dispatch(login(loggedInUser));
      saveUserToApi(loggedInUser); // Simpan data pengguna ke API
      setEmail('');
      setPassword('');
      setError('');
      handleLoginSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-around min-h-screen font-sans'>
      <div className='w-full max-w-md flex overflow-hidden'>
        <div className='w-full p-8 mx-auto md:mx-0'>
          <div className='flex pb-8'>
            <NavLink
              to="/login"
              className="text-3xl font-bold text-gray-800 flex-1 pl-10"
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-3xl font-bold text-gray-800 flex-1"
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Register
            </NavLink>
          </div>
          <form onSubmit={handleLogin} className='px-0'>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{ boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)' }}
              >
                <div className='mr-3 text-gray-400'>
                  <Envelope />
                </div>
                <input
                  type='email'
                  id='email'
                  className='w-full bg-transparent focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{ boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)' }}
              >
                <div className='mr-3 text-gray-400'>
                  <Lock />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='w-full bg-transparent focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  required
                />
                <div
                  className='cursor-pointer text-gray-400'
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </div>
              </div>
            </div>
            <div className='flex pb-4'>
              <h2 className='text-1xl font-bold text-gray-800 flex-1' style={{ color: '#377389' }}>
                Lupa password?
              </h2>
              <button
                type='submit'
                className='w-full text-white font-bold py-1 px-3 rounded-full flex-1'
                style={{ backgroundColor: 'rgba(73,193,166,1)' }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='w-full max-w-md flex bg-none overflow-hidden'>
        <div className='w-full mx-auto md:mr-0'>
          <img src={imgSide} alt='Side Image' className='w-full' />
        </div>
      </div>
      <div
        className='fixed inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${imgBg})`, zIndex: '-1' }}
      ></div>
    </div>
  );
};

export default LoginForm;
