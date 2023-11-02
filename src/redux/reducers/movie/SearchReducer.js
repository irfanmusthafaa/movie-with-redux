import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
};

const searchResult = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setSearchResult } = searchResult.actions;

export default searchResult.reducer;
