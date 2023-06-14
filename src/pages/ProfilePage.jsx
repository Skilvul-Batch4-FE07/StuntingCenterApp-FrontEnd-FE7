import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, updateUserProfile, loadUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';
import { updateCurrentUser, clearCurrentUser, getCurrentUser } from '../utils/localStorage';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!userProfile && currentUser) {
      dispatch(loadUser());
    } else if (userProfile) {
      setName(userProfile.name);
      setEmail(userProfile.email);
    }
  }, [dispatch, userProfile]);

  const handleUpdateProfile = async () => {
    try {
      await dispatch(updateUserProfile(userProfile.id, { name, email }));
      await dispatch(loadUser()); // Memuat kembali data pengguna setelah pembaruan
      updateCurrentUser(name); // Update data pengguna di localStorage
      navigate('/profile');
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been successfully updated!',
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    clearCurrentUser(); // Menghapus data pengguna dari localStorage saat logout
    navigate('/home');
  };

  if (!userProfile) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 flex justify-center">
        <div className="max-w-md w-full bg-white border-2 border-gray-300 p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 rounded-md py-2 px-3 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 rounded-md py-2 px-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mr-2"
              onClick={handleUpdateProfile}
            >
              Save
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
