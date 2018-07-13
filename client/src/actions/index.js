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
  const pokemonData = data.results.map(pokemon => {
    const { url } = pokemon;
    pokemon.id = url.substring(34, url.length - 1);
    return pokemon;
  });
  return {
    type: RECEIVE_POKEMON_DATA,
    payload: pokemonData
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
  data.stats.map(pokemon => {
    switch (pokemon.stat.name) {
      case 'speed':
        pokemon.max_stat = 140;
        return pokemon;
      case 'special-attack':
        pokemon.max_stat = 154;
        return pokemon;
      case 'special-defense':
        pokemon.max_stat = 154;
        return pokemon;
      case 'defense':
        pokemon.max_stat = 180;
        return pokemon;
      case 'attack':
        pokemon.max_stat = 134;
        return pokemon;
      case 'hp':
        pokemon.max_stat = 250;
        return pokemon;
      default:
        return null;
    }
  });
  dispatch(receiveSelectedPokemonData(data));
}
