import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=6c696c5437896e8e1f987925ab42dd3e';

const fetchTrend = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day?${API_KEY}`);
  return data;
};

const fatchSearchMovies = async q => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?${API_KEY}&query=${q}&include_adult=false`
  );
  return data;
};

const fatchMovieId = async ({ moviesId }) => {
  const data = await axios.get(`${BASE_URL}movie/${moviesId}?${API_KEY}`);
  return data;
};

const fatchMovieReviews = async ({ moviesId }) => {
  const data = await axios.get(
    `${BASE_URL}movie/${moviesId}/reviews?${API_KEY}`
  );
  return data;
};
const fatchMovieCast = async ({ moviesId }) => {
  const data = await axios.get(
    `${BASE_URL}movie/${moviesId}/credits?${API_KEY}`
  );
  return data;
};

export {
  fatchSearchMovies,
  fetchTrend,
  fatchMovieId,
  fatchMovieReviews,
  fatchMovieCast,
};
