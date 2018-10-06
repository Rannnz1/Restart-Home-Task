import { FETCH_MOVIE } from "../actions/index";
const initState = {};

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_MOVIE: {
      return action.payload.data;
    }
    default:
      return state;
  }
}
