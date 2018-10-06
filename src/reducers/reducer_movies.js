import { FETCH_MOVIES } from "../actions/index";
const initState = {};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      console.log(action.payload.data.movies);
      return action.payload.data.movies;
    }
    default:
      return state;
  }
}
