// Import Data
import { blogs } from "../Data";

import { createSlice } from "@reduxjs/toolkit";

export const blogsDetailsSlice = createSlice({
  name: "blogsDetails",
  initialState: {
    data: window.localStorage.getItem("blogsDetails")
      ? JSON.parse(window.localStorage.getItem("blogsDetails")).data
      : blogs,
    idNow: window.localStorage.getItem("blogsDetails")
      ? JSON.parse(window.localStorage.getItem("blogsDetails")).idNow
      : null,
  },
  reducers: {
    addComment: (state, action) => {
      const { name, message, commentId } = action.payload;
      const oldCount = state.data[commentId - 1].comments.count;
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      // Handle Comment Date
      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDate();
      const monthNumber = date.getMonth();
      const month = months[monthNumber + 1];

      state.data[commentId - 1].comments.count = oldCount + 1;
      state.data[commentId - 1].comments.data.push({
        id: oldCount + 1,
        name: name,
        comment: message,
        date: `${day} ${month} ${year}`,
      });
    },

    setId: (state, action) => {
      state.idNow = action.payload;
    },

    setInStorage: (state) => {
      window.localStorage.setItem("blogsDetails", JSON.stringify(state));
    },
  },
});

export const { addComment, setId, setInStorage } = blogsDetailsSlice.actions;

export default blogsDetailsSlice.reducer;
