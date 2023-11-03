import { toast } from "react-toastify";
import { fetchDataMovies } from "../../services/Movies/get-movies-popular";
import { setDataMovies } from "../reducers/movie/MovieReducer";

export const MovieAction = () => (dispatch) => {
  fetchDataMovies()
    .then((result) => {
      dispatch(setDataMovies(result));
    })
    .catch((err) => {});
};
