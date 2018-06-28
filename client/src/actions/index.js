import { REQUEST_POKEMON_DATA, RECEIVE_POKEMON_DATA } from './types.js';
import axios from 'axios';

const requestPokemonData = () => ({
  type: REQUEST_POKEMON_DATA,
  payload: true
});

const receivePokemonData = data => ({
  type: RECEIVE_POKEMON_DATA,
  payload: data
});

export const fetchPokemonData = () = async dispatch => {
  dispatch(requestPokemonData());
  const request = await axios.get('/api/pokemon');
  const { data } = request;
  dispatch(receivePokemonData(data));
}
