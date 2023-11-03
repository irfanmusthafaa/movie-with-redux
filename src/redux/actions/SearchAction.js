import { toast } from "react-toastify";
import { fetchDataMovies } from "../../services/Movies/get-movies-popular";
import { fetchDataMoviesSearch } from "../../services/Movies/get-movies-search";
import { setSearchResult } from "../reducers/movie/SearchReducer";

export const SearchAction = (query) => (dispatch) => {
  fetchDataMoviesSearch(query)
    .then((result) => {
      dispatch(setSearchResult(result));
    })
    .catch((err) => {});
};
