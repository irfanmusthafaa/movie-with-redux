import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useLocation } from "react-router-dom";

export const fetchDataMoviesDetail = async (id) => {
  // const location = useLocation();
  // const id = location.state ? location.state.idMovie : "";
  // console.log(id, "id");
  const { data } = await http.get(`${API_ENDPOINT.DETAIL_MOVIE}/${id}`);
  return data;
};

// const fetchDataMoviesDetail = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http
//     .get(_key, { params: _params })
//     .then((result) => {
//       return result;
//     })
//     .catch((err) => {
//       if (err.response.status === 401 || err.response.status === 404) {
//         window.location.href = "/";
//       }
//     });
//   return data.data;
// };

// const useDataMoviesDetailQuery = (options) => {
//   const data = useLocation();
//   const [ID, setID] = useState(data.state ? data.state.idMovie : "");

//   return useQuery([`${API_ENDPOINT.DETAIL_MOVIE}/${ID}`, options], fetchDataMoviesDetail);
// };

// export { fetchDataMoviesDetail };
