import { fetchGetMe } from "../../services/Auth/get-me";
import { setGetMe } from "../reducers/auth/GetMeReducer";

export const GetMeAction = () => (dispatch) => {
  fetchGetMe()
    .then((result) => {
      dispatch(setGetMe(result));
    })
    .catch((err) => {
      console.log(err);
    });
};
