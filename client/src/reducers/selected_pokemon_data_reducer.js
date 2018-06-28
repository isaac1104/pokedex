import { REQUEST_SELECTED_POKEMON_DATA, RECEIVE_SELECTED_POKEMON_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false
}

function selectedPokemonDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SELECTED_POKEMON_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SELECTED_POKEMON_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default selectedPokemonDataReducer;
