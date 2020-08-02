import {
  USER_FETCH_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  paged: {
    items: [],
    total: 0
  }
};

export default function user(state = initialState, action) {
  let userState = state;

  switch (action.type) {
    case USER_FETCH_SUCCESS:
      userState = {
        paged: action.payload
      };
      break;

      default:
      userState = state;
  }

  return userState;
}