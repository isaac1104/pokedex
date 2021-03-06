import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA, FILTER_POKEMON_DATA, SORT_POKEMON_DATA } from '../actions/types';

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
          ...action.payload,
          results: action.payload.results.map(data => {
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
    case SORT_POKEMON_DATA:
      return {
        ...state,
        filteredData: [...state.filteredData].sort((a, b) => {
          if (action.payload === 'alphabetically') {
            return (a.name < b.name ? -1 : a.name > b.name : 1);
          } else if (action.payload === 'reverse-alphabetically') {
            return (a.name > b.name ? -1 : a.name < b.name : 1);
          } else if (action.payload === 'id-ascending') {
            return Number(a.id) - Number(b.id);
          } else {
            return Number(b.id) - Number(a.id);
          }
        })
      };
    default:
      return state;
  }
}

export default pokemonDataReducer;
