import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},

    //register
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    registerUserFailure: (state) => {
      state.error = "error";
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;
