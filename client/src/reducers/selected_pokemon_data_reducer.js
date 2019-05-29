import { REQUEST_SELECTED_POKEMON_DATA, RECEIVE_SELECTED_POKEMON_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: '',
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
        data: {
          ...action.payload,
          stats: action.payload.stats.map(data => {
            switch (data.stat.name) {
              case 'speed':
                return {
                  ...data,
                  max_stat: 140
                };
              case 'special-attack':
                return {
                  ...data,
                  max_stat: 154
                };
              case 'special-defense':
                return {
                  ...data,
                  max_stat: 154
                };
              case 'defense':
                return {
                  ...data,
                  max_stat: 180
                };
              case 'attack':
                return {
                  ...data,
                  max_stat: 134
                };
              case 'hp':
                return {
                  ...data,
                  max_stat: 250
                };
              default:
                return null;
            }
          })
        }
      };
    default:
      return state;
  }
}

export default selectedPokemonDataReducer;
