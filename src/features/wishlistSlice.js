import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: window.localStorage.getItem("amazing_wishlist")
      ? JSON.parse(window.localStorage.getItem("amazing_wishlist")).products
      : [],
  },
  reducers: {
    addProductToWishlist: (state, action) => {
      state.products.push(action.payload);
    },

    removeProductFromWishlist: (state, action) => {
      const id = action.payload;

      for (let x = 0; x < state.products.length; x++) {
        if (state.products[x].id === id) {
          state.products.splice(x, 1);
          break;
        }
      }
    },

    setInStorageWishlist: (state) => {
      window.localStorage.setItem("amazing_wishlist", JSON.stringify(state));
    },
  },
});

export const {
  addProductToWishlist,
  removeProductFromWishlist,
  setInStorageWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
