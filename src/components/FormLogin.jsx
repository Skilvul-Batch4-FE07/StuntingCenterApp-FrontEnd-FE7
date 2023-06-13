<<<<<<< HEAD
=======
import React, { useState } from 'react';
>>>>>>> develop
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import imgSide from '../assets/img/icon_bg.png';
import imgBg from '../assets/bg-logreg.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { saveUserToApi, getUserFromApi } from '../utils/api';
import { PersonCircle, Eye, EyeSlash, LockFill } from 'react-bootstrap-icons';
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> develop

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/home');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loggedInUser = await getUserFromApi(email, password);
    if (loggedInUser) {
      dispatch(login(loggedInUser));
      saveUserToApi(loggedInUser); 
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
<<<<<<< HEAD
          <div className='text-center mb-8'>
            <h1 className='font-semibold text-2xl'>Bergabunglah dengan kami</h1>
            <span>Temukan solusi bersama</span>
          </div>
          <div className='flex pb-8'>
            <NavLink
              to="/login"
              className="text-xl font-bold flex-1 pl-10 underline"
=======
          <div className='flex pb-8'>
            <NavLink
              to="/login"
              className="text-3xl font-bold flex-1 pl-10 underline"
>>>>>>> develop
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Masuk
            </NavLink>
            <NavLink
              to="/register"
<<<<<<< HEAD
              className="text-xl font-bold flex-1 opacity-50"
=======
              className="text-3xl font-bold flex-1 opacity-50"
>>>>>>> develop
              style={{ color: "rgba(17, 118, 143, 255)" }}
            >
              Daftar
            </NavLink>
          </div>
<<<<<<< HEAD
          
=======
>>>>>>> develop
          <form onSubmit={handleLogin} className='px-0'>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{ boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)' }}
              >
                <div className='mr-3 text-gray-400'>
                  <PersonCircle color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type='email'
                  id='email'
                  className='w-full bg-transparent focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Masukkan email kamu'
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
                  <LockFill color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='w-full bg-transparent focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Masukkan password'
                  required
                />
                <div
                  className='cursor-pointer'
                  onClick={toggleShowPassword}
                  style={{ padding: '4px' }}
                >
                  {showPassword ? <EyeSlash color="rgba(17, 118, 143, 255)"/> : <Eye color="rgba(17, 118, 143, 255)"/>}
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
                style={{ backgroundColor: 'rgba(17, 118, 143, 255)' }}
              >
                Masuk
              </button>
            </div>
            <p className="text-center text-gray-800 mb-4">
              Belum punya akun?{" "}
              <NavLink
                to="/register"
                className="text-1xl font-bold text-gray-800"
                style={{ color: '#377389' }}
              >
                Daftar
              </NavLink>
              {" "}atau <br></br><NavLink
                to="/home"
                className="text-1xl font-bold text-gray-800"
                style={{ color: '#377389' }}
              >
                Kembali ke halaman utama
              </NavLink>
            </p>

          </form>
        </div>
      </div>
      
      <div className='w-full max-w-md flex bg-none overflow-hidden'>        
        <div className='w-full mx-auto md:mr-0'>
<<<<<<< HEAD
=======
          <h1 className="p-2 text-3xl font-bold mb-8"
            style={{ color: 'rgba(17, 118, 143, 255)' }}
          >Bergabunglah dengan Stunting Center dan temukan solusi bersama</h1>
>>>>>>> develop
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
