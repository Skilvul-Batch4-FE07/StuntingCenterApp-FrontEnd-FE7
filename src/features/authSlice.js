import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveUserToApi, removeUserFromApi, getUserFromApi } from '../utils/api';

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  try {
    const response = await getUserFromApi();
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('Invalid response');
    }
  } catch (error) {
    console.error('Error loading user:', error);
    throw error;
  }
});

const initialState = {
  user: null,
  loggedIn: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      saveUserToApi(action.payload)
        .catch((error) => console.error('Error saving user:', error));
    },
    logout: (state) => {
      removeUserFromApi()
        .catch((error) => console.error('Error removing user:', error));
      state.user = null;
      state.loggedIn = false;
      state.userProfile = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      saveUserToApi(action.payload)
        .catch((error) => console.error('Error saving user:', error));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.userProfile = action.payload;
    });
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
