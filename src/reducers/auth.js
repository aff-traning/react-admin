import { Cookies } from 'react-cookie';
import {
  AUTH_SET_TOKEN,
  GET_INFO_USER
} from '../constants/actionTypes';
import * as authUtils from '../utils/auth';

const cookies = new Cookies();
const initialState = cookies.get('authState') ? cookies.get('authState') : {};

export default function auth(state = initialState, action) {
  let authState = state;

  switch (action.type) {
    case AUTH_SET_TOKEN:
      console.log('Auth Reducer: ', state, action);
      authState = {
        ...action.payload,
      };
      authUtils.setAuthCookie(authState);
      break;

      default:
      authState = state;
  }

  return authState;
}