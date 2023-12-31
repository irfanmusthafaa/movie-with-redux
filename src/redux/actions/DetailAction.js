import { toast } from "react-toastify";
import { fetchDataMoviesDetail } from "../../services/Movies/get-movies-detail";
import { setDetail } from "../reducers/movie/DetailReducer";

export const DetailAction = (id) => (dispatch) => {
  fetchDataMoviesDetail(id)
    .then((result) => {
      dispatch(setDetail(result.data));
    })
    .catch((err) => {});
};
