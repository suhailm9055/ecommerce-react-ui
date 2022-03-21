import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: null,
    error: null,
    mobileUser: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    OTPLoginStart: (state) => {
      state.isFetching = true;
    },
    OTPLoginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.mobileUser = action.payload.data;
      state.error = false;
    },
    OTPLoginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    MobileLoginStart: (state) => {
      state.isFetching = true;
    },
    MobileLoginSuccess: (state, action) => {
      state.isFetching = false;
      state.mobileUser = action.payload;
      state.error = false;
    },
    MobileLoginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    RegisterStart: (state) => {
      state.isFetching = true;
    },
    RegisterSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    RegisterFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutsuccess: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    googleLogin: (state,action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false;
    },

  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
  logoutsuccess,
  OTPLoginStart,
  OTPLoginSuccess,
  OTPLoginFailure,
  MobileLoginStart,
  MobileLoginSuccess,
  MobileLoginFailure,
  googleLogin
} = userSlice.actions;
export default userSlice.reducer;
