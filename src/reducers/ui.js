import {
  TOGGLE_COLLAPSE_MENU
} from '../constants/actionTypes';

const initialState = {
  leftMenuVisible: true
};

export default function ui(state = initialState, action) {
  let uiState = state;

  switch (action.type) {
    case TOGGLE_COLLAPSE_MENU:
      uiState = {
        ...state,
        leftMenuVisible: !state.leftMenuVisible
      };
      break;

      default:
      uiState = state;
  }

  return uiState;
}