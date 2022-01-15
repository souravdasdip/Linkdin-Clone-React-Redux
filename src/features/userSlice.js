import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginToApp: (state, action) => {
      state.user = action.payload
    },

    logoutToApp: (state) => {
      state.user = null
    }
  }
});

export const { loginToApp, logoutToApp } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
