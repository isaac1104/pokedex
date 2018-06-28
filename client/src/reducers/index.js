import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pokemonDataReducer from './pokemon_data_reducer';
import selectedPokemonDataReducer from './selected_pokemon_data_reducer';

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
  selectedPokemonData: selectedPokemonDataReducer,
  form: formReducer
});

export default rootReducer;
