import { LoginUser } from "../../services/Auth/post-login";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/AuthReducer";
import { toast } from "react-toastify";

export const AuthAction = (input) => (dispatch) => {
  LoginUser(input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));

      window.location.href = "/home";
      toast.success("Login berhasil");
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false));
  CookiesStorage.remove(CookiesKey.AuthToken);
  window.location.href = "/";
};
