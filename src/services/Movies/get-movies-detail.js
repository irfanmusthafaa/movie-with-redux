import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchDataMoviesDetail = async (id) => {
  const { data } = await http.get(`${API_ENDPOINT.DETAIL_MOVIE}/${id}`);
  return data;
};
