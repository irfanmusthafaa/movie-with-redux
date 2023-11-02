import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: {},
};

const MovieReducer = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = MovieReducer.actions;

export default MovieReducer.reducer;
