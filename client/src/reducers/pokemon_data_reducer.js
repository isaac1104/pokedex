import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA, FILTER_POKEMON_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  filteredData: [],
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
        data: {
          ...action.payload.results.map(data => {
            return {
              ...data,
              id: data.url.substring(34, data.url.length - 1)
            };
          })
        }
      };
    case FILTER_POKEMON_DATA:
      return {
        ...state,
        filteredData: state.data.results.filter(pokemon => pokemon.name.includes(action.payload.toLowerCase()))
      };
    default:
      return state;
  }
}

export default pokemonDataReducer;
