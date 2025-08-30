import type { AxiosResponse } from "axios";
import { api } from "@/api";
import type {
  EntertainmentData,
  EntertainmentType,
  GetRandomEntertainmentResponse,
} from "@/types/entertainment";
import { useToast } from "./use-toast";

const apiUrl = import.meta.env.VITE_THE_MOVIE_DATABASE_API_URL;
const apiKey = import.meta.env.VITE_THE_MOVIE_DATABASE_API_KEY;

const entertainmentOptions = [
  {
    type: "anime",
    route: "tv",
    params: {
      with_genres: "16",
      with_original_language: "ja",
    },
  },
  {
    type: "movie",
    route: "movie",
    params: {
      "vote_average.gte": "6.5",
      "vote_count.gte": "120",
    },
  },
  {
    type: "series",
    route: "tv",
    params: {
      "vote_average.gte": "6.5",
      "vote_count.gte": "17",
    },
  },
];

export const useEntertainment = () => {
  const toast = useToast();

  const formatEntertainment = (
    type: EntertainmentType,
    entertainment: EntertainmentData,
  ) => {
    const { first_air_date, release_date, id, name, title, backdrop_path } =
      entertainment;

    const releaseYear =
      first_air_date?.slice(0, 4) || release_date?.slice(0, 4) || "";

    const link =
      type === "movie"
        ? `https://www.themoviedb.org/movie/${id}`
        : `https://www.themoviedb.org/tv/${id}`;

    return {
      title: `${name ?? title} (${releaseYear})`,
      link,
      image: backdrop_path
        ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
        : "",
      video: "",
    };
  };

  const getRandomEntertainment = async (type: EntertainmentType) => {
    const options = entertainmentOptions.find((item) => item.type === type);

    if (!options) return null;

    const { params, route } = options;

    const baseParams = {
      api_key: apiKey,
      language: "pt",
      ...params,
    };

    const baseUrl = `${apiUrl}/discover/${route}`;

    try {
      const defaultResponse: AxiosResponse<GetRandomEntertainmentResponse> =
        await api.get(baseUrl, {
          params: {
            ...baseParams,
            page: "1",
          },
        });

      if (!defaultResponse.data.total_pages) return null;

      const maxPages = Math.min(defaultResponse.data.total_pages, 500);
      const randomPage = Math.floor(Math.random() * maxPages) + 1;

      const response: AxiosResponse<GetRandomEntertainmentResponse> =
        await api.get(baseUrl, {
          params: {
            ...baseParams,
            page: randomPage,
          },
        });

      const { data } = response;

      if (!data.results?.length) return null;

      const randomIndex = Math.floor(Math.random() * data.results.length);
      const result = data.results[randomIndex];

      return result;
    } catch {
      toast.error("Erro! Não foi possível gerar este resultado");

      return null;
    }
  };

  return {
    getRandomEntertainment,
    formatEntertainment,
  };
};
