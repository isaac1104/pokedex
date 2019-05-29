import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pokemonDataReducer from './pokemon_data_reducer';
import selectedPokemonDataReducer from './selected_pokemon_data_reducer';
import modalVisibilityReducer from './modal_visibility_reducer';

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
  selectedPokemonData: selectedPokemonDataReducer,
  modalVisibility: modalVisibilityReducer,
  form: formReducer
});

export default rootReducer;
