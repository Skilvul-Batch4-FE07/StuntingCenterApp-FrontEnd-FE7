import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from '../features/authSlice';
import '../components/style/landingpage.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import NavLogo from '../assets/img/logo_new2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userProfile);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/home');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-gray-300 sticky top-0 z-50 bg-white py-2">
      <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full flex-wrap px-4">
        <NavLink to="/" className="cursor-pointer">
          <img src={NavLogo} alt="Logo" className="w-16 sm:w-20" />
        </NavLink>
        <div className="lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-blue-500 hover:border-blue-500"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" /> 
            )}
            </svg>
          </button>
        </div>
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
          <ul className="text-base text-gray-600 flex flex-col lg:flex-row items-center lg:justify-end">
            <li className="lg:px-4 py-2 hover:text-cyan-600 font-semibold text-lg lg:pl-6">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="lg:px-4 py-2 hover:text-cyan-600 font-semibold text-lg lg:pl-6">
              <NavLink to="/home">BMI</NavLink>
            </li>
            <li className="lg:px-4 py-2 hover:text-cyan-600 font-semibold text-lg lg:pl-6">
              <NavLink to="/home">Artikel</NavLink>
            </li>
            <li className="lg:px-4 py-2 hover:text-cyan-600 font-semibold text-lg lg:pl-6">
              <NavLink to="/home">Forum</NavLink>
            </li>


            {user && (
              <li className="lg:px-4 py-2 hover:text-blue-500 font-semibold text-lg lg:pl-6">
                <div className="flex items-center cursor-pointer hover:text-primary" onClick={toggleDropdown}>
                  <div className="rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center mr-1">
                    <span className="font-semibold" style={{ color: '#15acb1' }}>{user.name[0]}</span>
                  </div>
                  <span style={{ color: '#15acb1' }}>{userName}</span>
                </div>
                {showDropdown && (
                  <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 py-2 shadow-lg transition-all duration-300">
                    <li>
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Edit Profil
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )}
            {!user && (
              <li className="lg:px-4 py-2 hover:text-blue-500 font-semibold text-lg lg:pl-6">
              <NavLink
                to="/login"
                className="bg-primary text-white rounded py-2 px-4 font-semibold text-md ml-2 flex justify-center items-center transition duration-300 ease-in-out"
                style={{ backgroundColor: '#15acb1' }}
                onMouseOver={(e) => { e.target.style.backgroundColor = '#1f6d79'; }} 
                onMouseOut={(e) => { e.target.style.backgroundColor = '#15acb1'; }} 
              >
                Login / Register
              </NavLink> 
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
