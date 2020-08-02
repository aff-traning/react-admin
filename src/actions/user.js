import {
  USER_FETCH,
  USER_FETCH_SUCCESS
} from '../constants/actionTypes';

export const fetchUser = (data) => {
  return {
    type: USER_FETCH,
    payload: data
  }
};

export const fetchUserSuccess = (data) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: data
  }
};
