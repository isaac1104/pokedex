import {
  REQUEST_POKEMON_DATA,
  RECEIVE_POKEMON_DATA,
  FILTER_POKEMON_DATA,
  REQUEST_SELECTED_POKEMON_DATA,
  RECEIVE_SELECTED_POKEMON_DATA
} from './types.js';
import axios from 'axios';

const requestPokemonData = () => ({
  type: REQUEST_POKEMON_DATA,
  payload: true
});

const receivePokemonData = data => {
  const newData = data.results.map(pokemon => {
    return {
      ...pokemon,
      id: pokemon.url.substring(34, pokemon.url.length - 1)
    }
  });
  return {
    type: RECEIVE_POKEMON_DATA,
    payload: newData
  }
}

export const fetchPokemonData = () => async dispatch => {
  dispatch(requestPokemonData());
  const request = await axios.get('/api/pokemon');
  const { data } = request;
  dispatch(receivePokemonData(data));
  dispatch(filterPokemonData(''));
}

export const filterPokemonData = searchTerm => ({
  type: FILTER_POKEMON_DATA,
  payload: searchTerm
});

const requestSelectedPokemonData = () => ({
  type: REQUEST_SELECTED_POKEMON_DATA,
  payload: true
});

const receiveSelectedPokemonData = data => ({
  type: RECEIVE_SELECTED_POKEMON_DATA,
  payload: data
});

export const fetchSelectedPokemonData = pokemon => async dispatch => {
  dispatch(requestSelectedPokemonData());
  const request = await axios.get('/api/selectedPokemon', {
    params: {
      pokemon
    }
  });
  const { data } = request;
  const newData = {
    ...data,
    stats: data.stats.map(data => {
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
  };
  dispatch(receiveSelectedPokemonData(newData));
}
