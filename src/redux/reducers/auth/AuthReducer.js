import { createSlice } from "@reduxjs/toolkit";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";

const initialState = {
  token: CookiesStorage.get(CookiesKey.AuthToken) || undefined,
  isLogin: !!CookiesStorage.get(CookiesKey.AuthToken) || false,
};

const AuthReducer = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn } = AuthReducer.actions;

export default AuthReducer.reducer;
