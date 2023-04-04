import { createSlice } from "@reduxjs/toolkit";

export const newsDataStateSlice = createSlice({
  name: "newsData",
  initialState: {
    newsData: [],
    isloading: false,
  },
  reducers: {
    getNewsDataFetch: (state) => {
      state.isloading = true;
    },
    getNewsDataSuccess: (state, action) => {
      state.newsData = action.payload;
      state.isloading = false;
    },
    getNewsDataFailure: (state) => {
      state.isloading = false;
    },
  },
});

export const { getNewsDataFetch, getNewsDataSuccess, getNewsDataFailure } =
  newsDataStateSlice.actions;

export default newsDataStateSlice.reducer;
