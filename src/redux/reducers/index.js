import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import MovieReducer from "./movie/MovieReducer";
import DetailReducer from "./movie/DetailReducer";

export default combineReducers({
  auth: AuthReducer,
  movie: MovieReducer,
  detail: DetailReducer,
});
