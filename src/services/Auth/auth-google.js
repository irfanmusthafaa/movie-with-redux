import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const LoginGoogle = async (input) => {
  return await http.post(API_ENDPOINT.GOOGLE_OAUTH, input);
};
