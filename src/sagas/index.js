import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

const APIs = {
  login: `https://localhost:5001/connect/token`,
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

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSagaWatcher() {
  yield takeLeading(actionTypes.AUTH_GET_TOKEN, userLoginSaga);
}

