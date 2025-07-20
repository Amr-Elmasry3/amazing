import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    accounts: window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo")).accounts
      : [],

    accountNow: window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo")).accountNow
      : {},

    isLogin: window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo")).isLogin
      : false,
  },
  reducers: {
    setInfo: (state, action) => {
      state.accounts.push({ ...action.payload });
    },

    setAccountNow: (state, action) => {
      const index = action.payload;
      state.accountNow = state.accounts[index];
    },

    handleLogin: (state) => {
      state.isLogin = true;
    },

    setInStorage: (state) => {
      window.localStorage.setItem("userInfo", JSON.stringify(state));
    },

    handleLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const {
  setInfo,
  setInStorage,
  handleLogin,
  setAccountNow,
  handleLogout,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
