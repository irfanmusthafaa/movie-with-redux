import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import MovieReducer from "./movie/MovieReducer";

export default combineReducers({
  auth: AuthReducer,
  movie: MovieReducer,
});
