import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const LoginUser = async (input) => {
  return await http.post(API_ENDPOINT.LOGIN_USER, input);
};
