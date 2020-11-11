import {
  USER_ROLE_FETCH,
  USER_ROLE_FETCH_SUCCESS,
  ROLE_BY_USER_FETCH,
  ROLE_BY_USER_FETCH_SUCCESS,
  USER_BY_ROLE_FETCH,
  USER_BY_ROLE_FETCH_SUCCESS
} from '../constants/actionTypes';

export const fetchUserRole = (data) => {
  return {
    type: USER_ROLE_FETCH,
    payload: data
  };
};

export const fetchUserRoleSuccess = (data) => {
  return {
    type: USER_ROLE_FETCH_SUCCESS,
    payload: data
  };
};

export const fetchRoleByUser = (data) => {
  return {
    type: ROLE_BY_USER_FETCH,
    payload: data
  };
}

export const fetchRoleByUserSuccess = (data) => {
  return {
    type: ROLE_BY_USER_FETCH_SUCCESS,
    payload: data
  };
}

export const fetchUserByRole = (data) => {
  return {
    type: USER_BY_ROLE_FETCH,
    payload: data
  };
}

export const fetchUserByRoleSuccess = (data) => {
  return {
    type: USER_BY_ROLE_FETCH_SUCCESS,
    payload: data
  };
}