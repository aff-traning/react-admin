import {
  USER_ROLE_FETCH_SUCCESS,
  USER_BY_ROLE_FETCH_SUCCESS,
  ROLE_BY_USER_FETCH_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  userRoles: {
    items: []
  },
  usersByRole: {
    items: []
  },
  rolesByUser: {
    items: []
  },
}

export default function userRole(state = initialState, action) {
  let userRoleState = state;

  switch (action.type) {
    case USER_ROLE_FETCH_SUCCESS:
      userRoleState = {
        ...userRoleState,
        userRoles: action.payload
      }
      break;

    case USER_BY_ROLE_FETCH_SUCCESS:
      userRoleState = {
        ...userRoleState,
        usersByRole: action.payload
      }
      break;

    case ROLE_BY_USER_FETCH_SUCCESS:
      userRoleState = {
        ...userRoleState,
        rolesByUser: action.payload
      }
      break;

    default:
      userRoleState = state;
      break;
  }

  return userRoleState;
}
