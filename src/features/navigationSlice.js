import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    pageName: window.localStorage.getItem("amazing_navigation")
      ? JSON.parse(window.localStorage.getItem("amazing_navigation"))
      : "",
  },
  reducers: {
    setPageName: (state, action) => {
      state.pageName = action.payload;
    },

    setPageInStorage: (state) => {
      window.localStorage.setItem("amazing_navigation", JSON.stringify(state));
    },
  },
});

export const { setPageName, setPageInStorage } = navigationSlice.actions;

export default navigationSlice.reducer;
