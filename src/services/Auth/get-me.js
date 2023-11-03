import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const fetchGetMe = async () => {
  const { data } = await http.get(API_ENDPOINT.GET_ME);
  return data.data;
};
