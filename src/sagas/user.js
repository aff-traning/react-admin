import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';
import * as helper from '../utils/helper';
import { getAuthToken } from '../utils/auth';

const { REACT_APP_IDENTITY_API } = process.env;

const APIs = {
  login: `${REACT_APP_IDENTITY_API}/connect/token`,
  users: `${REACT_APP_IDENTITY_API}/api/v1/users`,
};

export function* userLoginSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { userName, password } = action.payload;

    const res = yield fetch(
      APIs.login,
      {
        method: 'POST',
        body: new URLSearchParams({
          'userName': userName,
          'password': password,
          'grant_type': 'password'
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic Ym8ucm8uYXBwOmJvLnNlY3JldA==',
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Thông tin đăng nhập không đúng' });
    }

    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    const token = {
      accessToken: parsedRes.access_token,
      expiresIn: parsedRes.expires_in,
      tokenType: parsedRes.token_type,
      scope: parsedRes.scope,
    };

    yield put(actions.setToken(token));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export function* userFetchSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { page, limit, search } = action.payload;
    const queryParams = {
      page: page,
      limit: limit,
      search: search
    };

    const res = yield fetch(
      `${APIs.users}?${helper.serializeQueryString(queryParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Thông tin đăng nhập không đúng' });
    }

    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    yield put(actions.fetchUserSuccess(parsedRes.data));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export default function* userSagaWatcher() {
  yield takeLeading(actionTypes.AUTH_GET_TOKEN, userLoginSaga);
  yield takeLeading(actionTypes.USER_FETCH, userFetchSaga);
}

