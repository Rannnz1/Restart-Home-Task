import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

const ROOT_URL = "http://x-mode.co.il/exam/allMovies/allMovies.txt";

export const fetch_movies = () => {
  const url = ROOT_URL;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
};
const ROOT_URL_2 = "http://x-mode.co.il/exam/descriptionMovies/";

export const fetch_movie = id => {
  const url_2 = `${ROOT_URL_2}${id}.txt`;
  const request = axios.get(url_2);
  return {
    type: FETCH_MOVIE,
    payload: request
  };
};
