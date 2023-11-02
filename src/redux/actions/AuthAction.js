import { LoginUser } from "../../services/Auth/post-login";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/AuthReducer";

export const AuthAction = (input) => (dispatch) => {
  LoginUser(input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));

      window.location.href = "/home";
    })
    .catch((err) => {
      console.log(err);
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookiesStorage.remove(CookiesKey.AuthToken);
  window.location.href = "/";
};
