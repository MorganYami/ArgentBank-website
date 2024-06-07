import { createSlice } from "@reduxjs/toolkit";
import instance from "./axios";

const initialState = {
  token: null,
  userName: '',
  firstName: '',
  lastName: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    logout: (state) => {
      state.email = null;
      state.token = null;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
      instance.defaults.headers.common["Authorization"] = `Bearer ${state.token}`
    },
    updateProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    }
  },
});

export const { logout, saveToken, updateProfile, updateUserName } = authSlice.actions;

export default authSlice.reducer;
export const selectToken = (state) => state.user.token;