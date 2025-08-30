import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_THE_MOVIE_DATABASE_API_URL,
});
