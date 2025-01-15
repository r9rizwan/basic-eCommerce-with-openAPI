import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") ?? null;
const user = JSON.parse(localStorage.getItem("user")) ?? null;
const isAuthenticated = token && user;

const initialState = {
  token,
  user,
  isAuthenticated,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      // stored user auth to memory / global store
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // store user auth to local storage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    handleLogout: () => {
      state = initialState;
      localStorage.clear();
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;

// localStorage only holds strings. And if we have object to store then first JSON.stringify the object.
// localStorage have some methods attached to it => setItem, getItem, removeItem, clear
// localStorage pattern is key, value where value is a string.
