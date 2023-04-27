import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'fccf9db5f8a12104e5720aa899b6f5b7';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const TRENDING_PATH = '/trending/movie/day';

export const getAllUsers = async () => {
  const res = await axios.get(
    'https://63c19918376b9b2e647fe7f8.mockapi.io/users'
  );
  return res;
};

export const getTrendMovies = async () => {
  const { data } = await axios(TRENDING_PATH, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const getMovId = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  const {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    genres,
    overview,
    vote_average: voteAverage,
  } = data;
  return { title, posterPath, releaseDate, genres, overview, voteAverage };
};

export const getCastId = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.cast;
};

export const getReviewsId = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};

export const getMovQuery = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page: 1,
    },
  });

  return data.results;
};
