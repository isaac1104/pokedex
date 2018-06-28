import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false
}

function pokemonDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POKEMON_DATA:
      return {
        ...state,
        isFetching: action.payload
      };
    case RECEIVE_POKEMON_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default pokemonDataReducer;
