import {
  ROLE_FETCH,
  ROLE_FETCH_SUCCESS
} from '../constants/actionTypes';

export const fetchRole = (data) => {
  return {
    type: ROLE_FETCH,
    payload: data
  };
};

export const fetchRoleSuccess = (data) => {
  return {
    type: ROLE_FETCH_SUCCESS,
    payload: data
  };
};
