import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    userData: {
      id: "",
      email: "",
      role: "",
      name: "",
    },
  },
  reducers: {
    toggleLogIn(state, { payload }) {
      state.isLoggedIn = payload;
    },
    addUser(state, { payload }) {
      state.userData = payload;
    },
    logout(state) {
      state.isLoggedIn = !state.isLoggedIn;
      state.userData = {};

      window.sessionStorage.clear();
    },
  },
});

export const UsersActions = UsersSlice.actions;
