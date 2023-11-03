import { createSlice } from "@reduxjs/toolkit";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";

const initialState = {
  getMe: {},
};

const GetMeReducer = createSlice({
  name: "getMe",
  initialState,
  reducers: {
    setGetMe: (state, action) => {
      state.getMe = action.payload;
    },
  },
});

export const { setGetMe } = GetMeReducer.actions;

export default GetMeReducer.reducer;
