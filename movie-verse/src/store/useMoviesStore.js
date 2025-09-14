import { create } from "zustand";
import { fetchFromTMDB } from "../utils/api";

const cacheKey = (key) => `movieverse_${key}`;

const saveCache = (key, data) => {
  sessionStorage.setItem(
    cacheKey(key),
    JSON.stringify({ data, timestamp: Date.now() })
  );
};

const loadCache = (key, maxAge = 15 * 60 * 1000) => {
  const item = sessionStorage.getItem(cacheKey(key));
  if (!item) return null;

  const { data, timestamp } = JSON.parse(item);
  if (Date.now() - timestamp > maxAge) return null;
  return data;
};

//generic fetch with caching
const fetchWithCache = async (endpoint, key, set, resultsOnly = true) => {
  set((state) => ({ loading: { ...state.loading, [key]: true } }));

  const cached = loadCache(key);
  if (cached) {
    set((state) => ({
      [key]: cached,
      loading: { ...state.loading, [key]: false },
    }));
    return;
  }
  try {
    const data = await fetchFromTMDB(endpoint);
    const payload = resultsOnly ? data?.results ?? [] : data;

    set((state) => ({
      [key]: payload,
      loading: { ...state.loading, [key]: false },
      error: { ...state.error, [key]: null },
    }));
    saveCache(key, payload);
  } catch (error) {
    console.error(`Failed to fetch ${key}`, error);
    set((state) => ({
      loading: { ...state.loading, [key]: false },
      error: { ...state.error, [key]: error.message || error },
    }));
  }
};

const useMovieStore = create((set) => ({
  movies: [],
  popular: [],
  trending: [],
  tvshows: [],
  movieDetails: {},
  selectedMovieId: null,

  loading: {
    movies: false,
    popular: false,
    trending: false,
    tvshows: false,
    details: false,
  },
  error: {
    movies: null,
    popular: null,
    trending: null,
    tvshows: null,
    details: null,
  },

  //movie & TV
  fetchMovies: () => fetchWithCache("/movie/now_playing", "movies", set),
  fetchPopularMovies: () => fetchWithCache("/movie/popular", "popular", set),

  fetchTrendingMovies: () =>
    fetchWithCache("/trending/movie/day", "trending", set),

  fetchTVShows: () => fetchWithCache("/tv/popular", "tvshows", set),

  //movie details with credits
  prefetchMovieDetails: async (movieId) => {
    const key = `details_${movieId}`;
    set((state) => ({ loading: { ...state.loading, details: true } }));

    const cached = loadCache(key);
    if (cached) {
      set((state) => ({
        movieDetails: { ...state.movieDetails, [movieId]: cached },
        loading: { ...state.loading, details: false },
      }));
      return;
    }

    try {
      const data = await fetchFromTMDB(
        `/movie/${movieId}?append_to_response=credits`
      );

      //extracting to 5 actors & producers
      const actors = data.credits?.cast?.slice(0, 5) ?? [];
      const producers = data.credits?.crew?.filter(
        (member) => member.job === "Producer"
      );

      const enrichedData = {
        ...data,
        actors,
        producers,
      };

      set((state) => ({
        movieDetails: { ...state.movieDetails, [movieId]: enrichedData },
        loading: { ...state.loading, details: false },
        error: { ...state.error, details: null },
      }));
      saveCache(key, enrichedData);
    } catch (error) {
      console.error("Failed to fetch movie details", error);
      set((state) => ({
        loading: { ...state.loading, details: false },
        error: { ...state.error, details: error.message || error },
      }));
    }
  },

  //selection
  setSelectedMovie: (movieId) => set({ selectedMovieId: movieId }),
  clearSelectedMovie: () => set({ selectedMovieId: null }),
}));

export default useMovieStore;
