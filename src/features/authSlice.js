import { createSlice } from '@reduxjs/toolkit';
import {
  saveUserToApi,
  getUserFromApi,
  removeUserFromApi,
  updateUserInApi,
} from '../utils/api';
import {
  setCurrentUserId,
  getCurrentUserId,
  clearCurrentUserId,
} from '../utils/localStorage';

export const loadUser = () => {
  return async (dispatch) => {
    try {
      const currentUserId = getCurrentUserId();
      if (currentUserId) {
        const response = await getUserFromApi(currentUserId);
        if (response) {
          dispatch(setUser(response));
        } else {
          throw new Error('Invalid response');
        }
      }
    } catch (error) {
      console.error('Error loading user:', error);
      throw error;
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      const currentUserId = getCurrentUserId();
      if (currentUserId) {
        await removeUserFromApi(currentUserId);
        clearCurrentUserId();
        dispatch(logout());
      }
    } catch (error) {
      console.error('Error removing user:', error);
      throw error;
    }
  };
};

export const updateUserProfile = (userId, updatedUser) => {
  return async (dispatch) => {
    try {
      await updateUserInApi(userId, updatedUser);
      dispatch(authSlice.actions.updateUserProfile(updatedUser));
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await saveUserToApi(user);
      dispatch(login(response));
      setCurrentUserId(response.id);
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await saveUserToApi(user);
      dispatch(register(response));
      setCurrentUserId(response.id);
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  };
};

const initialState = {
  user: null,
  loggedIn: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.userProfile = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.userProfile = null;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.userProfile = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    updateUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUser, logout, login, register } = authSlice.actions;
export default authSlice.reducer;
