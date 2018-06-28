import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pokemonDataReducer from './pokemon_data_reducer';

const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
  form: formReducer
});

export default rootReducer;
