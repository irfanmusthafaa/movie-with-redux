import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const fetchDataMovies = async () => {
  const { data } = await http.get(API_ENDPOINT.MOVIE_POPULAR);
  return data.data;
};
