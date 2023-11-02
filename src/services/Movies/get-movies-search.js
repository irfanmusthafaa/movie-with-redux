import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchDataMoviesSearch = async (query) => {
  const { data } = await http.get(`${API_ENDPOINT.SEARCH_MOVIE}?page=1&query=${query}`);
  return data.data;
};
