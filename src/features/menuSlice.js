import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleMenuToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleMenuToggle } = menuSlice.actions;

export default menuSlice.reducer;
