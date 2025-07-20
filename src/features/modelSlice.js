import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: false,
    message: "",
  },
  reducers: {
    handleModel: (state) => {
      state.isOpen = !state.isOpen;
    },

    setModelMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { handleModel, setModelMessage } = modelSlice.actions;

export default modelSlice.reducer;
