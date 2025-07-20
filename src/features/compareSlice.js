import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: {
    products: window.localStorage.getItem("amazing_compare")
      ? JSON.parse(window.localStorage.getItem("amazing_compare")).products
      : [],
  },
  reducers: {
    addProductToCompare: (state, action) => {
      state.products.push(action.payload);
    },

    removeProductFromCompare: (state, action) => {
      const id = action.payload;

      for (let x = 0; x < [...state.products].length; x++) {
        if (state.products[x].id === id) {
          state.products.splice(x, 1);
          break;
        }
      }
    },

    setInStorageCompare: (state) => {
      window.localStorage.setItem("amazing_compare", JSON.stringify(state));
    },
  },
});

export const {
  addProductToCompare,
  removeProductFromCompare,
  setInStorageCompare,
} = compareSlice.actions;

export default compareSlice.reducer;
