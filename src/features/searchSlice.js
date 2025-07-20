import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    searchCategory: "",
    resultsIsOpen: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },

    handleResultsBox: (state, action) => {
      const value = action.payload;

      if (value === "") {
        state.resultsIsOpen = false;
      } else {
        state.resultsIsOpen = true;
      }
    },
  },
});

export const { setSearchValue, setSearchCategory, handleResultsBox } =
  searchSlice.actions;

export default searchSlice.reducer;
