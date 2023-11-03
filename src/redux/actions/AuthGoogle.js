import { toast } from "react-toastify";
import { LoginGoogle } from "../../services/Auth/auth-google";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/AuthReducer";
import axios from "axios";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const registerLoginWithGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    let data = JSON.stringify({
      access_token: accessToken,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_URL}/${API_ENDPOINT.GOOGLE_OAUTH}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;
    CookiesStorage.set(CookiesKey.AuthToken, token);

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));

    window.location.href = "/home";
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

//   LoginGoogle(input)
//     .then((result) => {
//       CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
//       dispatch(setToken(result.data.data.token));
//       dispatch(setIsLoggedIn(true));

//       window.location.href = "/home";
//       toast.success("Login berhasil");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
