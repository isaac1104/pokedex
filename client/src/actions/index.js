import {
  REQUEST_POKEMON_DATA,
  RECEIVE_POKEMON_DATA,
  FILTER_POKEMON_DATA,
  REQUEST_SELECTED_POKEMON_DATA,
  RECEIVE_SELECTED_POKEMON_DATA,
  SORT_POKEMON_DATA,
  TOGGLE_POKEMON_MODAL
} from './types.js';
import axios from 'axios';

const requestPokemonData = () => ({
  type: REQUEST_POKEMON_DATA,
  payload: true
});

const receivePokemonData = data => ({
  type: RECEIVE_POKEMON_DATA,
  payload: data
});

export const fetchPokemonData = () => async dispatch => {
  dispatch(requestPokemonData());
  const request = await axios.get('/api/pokemon');
  const { data } = request;
  dispatch(receivePokemonData(data));
  dispatch(filterPokemonData(''));
};

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
  dispatch(receiveSelectedPokemonData(data));
};

export const sortPokemonData = category => ({
  type: SORT_POKEMON_DATA,
  payload: category
});

export const togglePokemonModal = () => ({
  type: TOGGLE_POKEMON_MODAL
});
