import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import MovieReducer from "./movie/MovieReducer";
import DetailReducer from "./movie/DetailReducer";
import SearchReducer from "./movie/SearchReducer";
import GetMeReducer from "./auth/GetMeReducer";

export default combineReducers({
  auth: AuthReducer,
  getMe: GetMeReducer,
  movie: MovieReducer,
  detail: DetailReducer,
  search: SearchReducer,
});
