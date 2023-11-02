import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataMovies: [],
};

const MovieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setDataMovies: (state, action) => {
      state.dataMovies = action.payload;
    },
  },
});

export const { setDataMovies } = MovieReducer.actions;

export default MovieReducer.reducer;
