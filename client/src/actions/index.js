import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA } from './types.js';

const requestPokemonData = () => ({
  type: REQUEST_POKEMON_DATA,
  payload: true
});

const receivePokemonData = data => ({
  type: RECEIVE_POKEMON_DATA,
  payload: data
});
