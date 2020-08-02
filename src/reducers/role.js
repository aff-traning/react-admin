import {
  ROLE_FETCH_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  paged: {
    items: []
  }
}

export default function role(state = initialState, action) {
  let roleState = state;

  switch (action.type) {
    case ROLE_FETCH_SUCCESS:
      roleState = {
        paged: action.payload
      }
      break;
    
    default:
      roleState = state;
      break;
  }

  return roleState;
}