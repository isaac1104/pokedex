import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA, FILTER_POKEMON_DATA } from './types.js';
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
}

export const filterPokemonData = searchTerm => ({
  type: FILTER_POKEMON_DATA,
  payload: searchTerm
});
