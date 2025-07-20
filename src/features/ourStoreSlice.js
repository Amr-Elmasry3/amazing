import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CapitalizeFirstLetter } from "../util/CapitalizeFirstLetter";
import { LowerCaseFirstLetter } from "../util/LowerCaseFirstLetter";

export const fetchData = createAsyncThunk("ourStore", async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=194"
    );
    return response.data.products;
  } catch (error) {
    return error;
  }
});

export const ourStoreSlice = createSlice({
  name: "ourStore",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    filter: { searchValue: "", categories: [], price: null, rate: null },
    displayDetails: { to: 0, from: 0, total: 0, pageNum: 0 },
    gridStyle: 4,
    count: 10,
    isLoading: false,
  },
  reducers: {
    handleGridStyle: (state, action) => {
      state.gridStyle = action.payload;
    },

    handleDisplayDetails: (state, action) => {
      const oldTo = state.displayDetails.to;
      const oldFrom = state.displayDetails.from;
      const oldPage = state.displayDetails.pageNum;
      const total = state.filteredProducts.length;

      const newPage = action.payload;

      let newTo, newFrom;

      if (newPage > oldPage) {
        const diff = newPage - oldPage;

        newTo = diff * state.count + oldTo;

        if (diff * state.count + oldFrom <= state.filteredProducts.length) {
          newFrom = diff * state.count + oldFrom;
        } else {
          newFrom = newTo + (state.filteredProducts.length - newTo);
        }
      } else if (newPage < oldPage) {
        const diff = oldPage - newPage;

        newFrom =
          oldFrom - state.count * diff < state.count
            ? state.count
            : oldFrom - state.count * diff;
        newTo = oldTo - state.count * diff;
      } else if (newPage === oldPage || !newPage) {
        newTo = oldTo;
        newFrom = oldFrom;
      }

      state.displayDetails = {
        to: newTo,
        from: newFrom,
        total: total,
        pageNum: newPage,
      };
    },

    handleFilter: (state, action) => {
      const key = action.payload.key;
      const value = action.payload.value;
      const category = action.payload.category;

      if (
        category === "searchInput" ||
        category === "price" ||
        category === "rate"
      ) {
        state.filter[key] = value;
      } else if (category === "categories") {
        state.filter.categories.includes(value)
          ? state.filter.categories.splice(
              state.filter.categories.indexOf(value),
              1
            )
          : state.filter.categories.push(value);
      }
    },

    resetDisplayDetails: (state) => {
      const newDataLenght = state.filteredProducts.length;

      if (newDataLenght === 0) {
        state.displayDetails.to = 0;
        state.displayDetails.from = 0;
        state.displayDetails.total = 0;
        state.displayDetails.pageNum = 0;
      } else if (newDataLenght > 0 && newDataLenght < state.count) {
        state.displayDetails.to = 1;
        state.displayDetails.from = newDataLenght;
        state.displayDetails.total = newDataLenght;
        state.displayDetails.pageNum = 1;
      } else if (newDataLenght > 0 && newDataLenght >= state.count) {
        state.displayDetails.to = 1;
        state.displayDetails.from = state.count;
        state.displayDetails.total = newDataLenght;
        state.displayDetails.pageNum = 1;
      }
    },

    handleFilteredProducts: (state) => {
      const searchValue = state.filter.searchValue;
      const categories = state.filter.categories;
      const price = state.filter.price;
      const rate = state.filter.rate;

      const newFilteredData = state.allProducts.filter((item) => {
        return (
          (item.title.startsWith(CapitalizeFirstLetter(searchValue)) ||
            item.title.startsWith(LowerCaseFirstLetter(searchValue)) ||
            !searchValue) &&
          (!rate || item.rating >= rate) &&
          (![...categories].length || categories.includes(item.category)) &&
          (!price || (item.price >= price[0] && item.price <= price[1]))
        );
      });

      state.filteredProducts = newFilteredData;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
      state.displayDetails = {
        to: 1,
        from: 10,
        total: [...action.payload].length,
        pageNum: 1,
      };
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (action) => {
      console.log(action.payload);
    });
  },
});

export const {
  handleGridStyle,
  handleDisplayDetails,
  handleFilter,
  handleFilteredProducts,
  resetDisplayDetails,
} = ourStoreSlice.actions;

export default ourStoreSlice.reducer;
