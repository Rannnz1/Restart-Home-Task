import { combineReducers } from "redux";
import reducer_movies from "./reducer_movies";
import reducer_movie from "./reducer_movie";

const rootReducer = combineReducers({
  movies: reducer_movies,
  active_movie: reducer_movie
});

export default rootReducer;
