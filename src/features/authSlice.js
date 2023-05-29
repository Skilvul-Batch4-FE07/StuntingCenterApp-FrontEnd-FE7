import { createSlice } from '@reduxjs/toolkit';
import { saveUserToLocalStorage, removeUserFromLocalStorage } from '../utils/localStorage';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      saveUserToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

//kalian kalau mau buat slice buat file baru 
//auth slice ini khusu untuk login regis