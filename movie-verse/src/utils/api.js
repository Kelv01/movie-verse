import { BASE_URL } from "./constants";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export async function fetchFromTMDB(endpoint, params = {}) {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("TMDB API Error", error);
  }
}
// export default api;
