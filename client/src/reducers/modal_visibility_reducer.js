import { TOGGLE_POKEMON_MODAL } from '../actions/types';

const INITIAL_STATE = {
  visible: false
};

const modalVisibilityReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_POKEMON_MODAL:
      return {
        ...state,
        visible: !state.visible
      };
    default:
      return state;
  }
};

export default modalVisibilityReducer;
