<<<<<<< HEAD
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/authSlice";
import { saveUserToApi, getUserFromApi } from "../utils/api";
import { Envelope, PersonCircle, LockFill } from "react-bootstrap-icons";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import imgSide from "../assets/img/icon_bg.png";
import imgBg from "../assets/bg-logreg.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/authSlice';
import { saveUserToApi, getUserFromApi } from '../utils/api';
import { Envelope, PersonCircle, LockFill } from 'react-bootstrap-icons';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import imgSide from '../assets/img/icon_bg.png';
import imgBg from '../assets/bg-logreg.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> develop
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
<<<<<<< HEAD
    navigate("/login");
=======
    navigate('/login');
>>>>>>> develop
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const existingUser = await getUserFromApi(email, password);
    if (existingUser) {
      Swal.fire({
<<<<<<< HEAD
        icon: "error",
        title: "Email sudah digunakan",
        text: "Alamat email sudah digunakan",
=======
        icon: 'error',
        title: 'Email sudah digunakan',
        text: 'Alamat email sudah digunakan',
>>>>>>> develop
      });
      return;
    }

    const user = { name, email, password };
    try {
      await saveUserToApi(user);
      dispatch(register(user));
<<<<<<< HEAD
      setName("");
      setEmail("");
      setPassword("");
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Alamat email sudah terdaftar.",
=======
      setName('');
      setEmail('');
      setPassword('');
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Alamat email sudah terdaftar.',
>>>>>>> develop
      }).then(() => {
        handleRegisterSuccess();
      });
    } catch (error) {
<<<<<<< HEAD
      console.error("Kesalahan saat mendaftarkan pengguna:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Gagal mendaftar. Coba lagi nanti.",
=======
      console.error('Kesalahan saat mendaftarkan pengguna:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Gagal mendaftar. Coba lagi nanti.',
>>>>>>> develop
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
<<<<<<< HEAD
    <div className="pl- flex flex-col-reverse md:flex-row items-center justify-around min-h-screen font-sans">
      <div className="w-full max-w-md flex overflow-hidden">
        <div className="w-full p-8">
          <div className="text-center mb-8">
            <h1 className="font-semibold text-2xl">Bergabunglah dengan kami</h1>
            <span>Temukan solusi bersama</span>
          </div>
          <div className="flex pb-8">
            <NavLink
              to="/login"
              className="text-xl font-bold flex-1 pl-10 opacity-50"
              style={{ color: "rgba(17, 118, 143, 255)" }}
=======
    <div className='pl- flex flex-col-reverse md:flex-row items-center justify-around min-h-screen font-sans'>
      <div className='w-full max-w-md flex overflow-hidden'>
        <div className='w-full p-8'>
          <div className='flex pb-8'>
            <NavLink
              to='/login'
              className='text-3xl font-bold flex-1 pl-10 opacity-50'
              style={{ color: 'rgba(17, 118, 143, 255)' }}
>>>>>>> develop
            >
              Masuk
            </NavLink>
            <NavLink
<<<<<<< HEAD
              to="/register"
              className="text-xl font-bold flex-1 underline"
              style={{ color: "rgba(17, 118, 143, 255)" }}
=======
              to='/register'
              className='text-3xl font-bold flex-1 underline'
              style={{ color: 'rgba(17, 118, 143, 255)' }}
>>>>>>> develop
            >
              Daftar
            </NavLink>
          </div>
<<<<<<< HEAD
          <form onSubmit={handleRegister} className="px-0">
            <div className="mb-6 pb-4">
              <div
                className="flex items-center bg-white rounded-full p-2 pl-4 shadow-lg"
                style={{
                  boxShadow: "-4px 4px 6px 0px rgba(200,235,229,255)",
                }}
              >
                <div className="mr-3 text-gray-400">
                  <PersonCircle color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama kamu"
=======
          <form onSubmit={handleRegister} className='px-0'>
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{
                  boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)',
                }}
              >
                <div className='mr-3 text-gray-400'>
                  <PersonCircle color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type='text'
                  id='name'
                  className='w-full bg-transparent focus:outline-none'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Masukkan nama kamu'
>>>>>>> develop
                  required
                />
              </div>
            </div>
<<<<<<< HEAD
            <div className="mb-6 pb-4">
              <div
                className="flex items-center bg-white rounded-full p-2 pl-4 shadow-lg"
                style={{
                  boxShadow: "-4px 4px 6px 0px rgba(200,235,229,255)",
                }}
              >
                <div className="mr-3 text-gray-400">
                  <Envelope color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email kamu"
=======
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{
                  boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)',
                }}
              >
                <div className='mr-3 text-gray-400'>
                  <Envelope color="rgba(17, 118, 143, 255)"/>
                </div>
                <input
                  type='email'
                  id='email'
                  className='w-full bg-transparent focus:outline-none'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Masukkan alamat email kamu'
>>>>>>> develop
                  required
                />
              </div>
            </div>
<<<<<<< HEAD
            <div className="mb-6 pb-4">
              <div
                className="flex items-center bg-white rounded-full p-2 pl-4 shadow-lg"
                style={{
                  boxShadow: "-4px 4px 6px 0px rgba(200,235,229,255)",
                }}
              >
                <div className="mr-3 text-gray-400">
                  <LockFill color="rgba(17, 118, 143, 255)" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full bg-transparent focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                />
                <div className="ml-2" style={{ padding: "4px" }}>
                  {showPassword ? (
                    <EyeSlash
                      onClick={togglePasswordVisibility}
                      style={{
                        cursor: "pointer",
                        color: "rgba(17, 118, 143, 255)",
                      }}
=======
            <div className='mb-6 pb-4'>
              <div
                className='flex items-center bg-white rounded-full p-2 pl-4 shadow-lg'
                style={{
                  boxShadow: '-4px 4px 6px 0px rgba(200,235,229,255)',
                }}
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
                <div className='ml-2' style={{ padding: '4px' }}>
                  {showPassword ? (
                    <EyeSlash
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer', color: 'rgba(17, 118, 143, 255)' }}
>>>>>>> develop
                    />
                  ) : (
                    <Eye
                      onClick={togglePasswordVisibility}
<<<<<<< HEAD
                      style={{
                        cursor: "pointer",
                        color: "rgba(17, 118, 143, 255)",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white font-bold py-1 px-3 rounded-full flex-1 mb-2"
              style={{ backgroundColor: "rgba(17, 118, 143, 255)" }}
            >
              Daftar
            </button>
            <p className="text-center text-gray-800 mb-4">
              Sudah punya akun?{" "}
              <NavLink
                to="/login"
                className="text-1xl font-bold text-gray-800"
                style={{ color: "#377389" }}
              >
                Masuk
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div
        className="w-full max-w-md flex bg-none overflow-hidden"
        style={{ overflow: "hidden" }}
      >
        <div className="w-full mx-auto">
          <img src={imgSide} alt="Side Image" className="w-full" />
        </div>
      </div>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgBg})`, zIndex: "-1" }}
      ></div>
    </div>
  );
};

=======
                      style={{ cursor: 'pointer', color: 'rgba(17, 118, 143, 255)' }}
                    />
                  )}
                </div>

              </div>
            </div>
            <button
              type='submit'
              className='w-full text-white font-bold py-1 px-3 rounded-full flex-1 mb-2'
              style={{ backgroundColor: 'rgba(17, 118, 143, 255)' }}
            >
              Daftar
            </button>
            <p className="text-center text-gray-800 mb-4">
              Sudah punya akun?{" "}
              <NavLink
                to="/login"
                className="text-1xl font-bold text-gray-800"
                style={{ color: '#377389' }}
              >
                Masuk
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div
        className='w-full max-w-md flex bg-none overflow-hidden'
        style={{ overflow: 'hidden' }}
      >
        <div className='w-full mx-auto'>
          <h1 className="p-2 text-3xl font-bold mb-8"
            style={{ color: 'rgba(17, 118, 143, 255)' }}
          >Bergabunglah dengan Stunting Center dan temukan solusi bersama</h1>
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

>>>>>>> develop
export default RegisterForm;
