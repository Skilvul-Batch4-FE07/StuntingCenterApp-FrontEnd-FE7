import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { removeUserFromApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userProfile);

  const handleLogout = async () => {
    try {
      await removeUserFromApi();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="container">
      <div className="flex h-screen justify-center items-center">
        <div className="w-full max-w-md">
          <div className="bg-white border-2 border-gray-300 p-8 rounded-lg">
            <h1 className="text-2xl text-gray-900 mb-4">Welcome, {user ? user.email : ''}!</h1>
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
