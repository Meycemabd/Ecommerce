// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  isAdmin: localStorage.getItem('isAdmin') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');

      state.isAdmin = action.payload?.isAdmin || false;
      localStorage.setItem('isAdmin', state.isAdmin.toString());
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'false');

      state.isAdmin = false;
      localStorage.setItem('isAdmin', 'false');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
