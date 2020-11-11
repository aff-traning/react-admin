import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';
import * as helper from '../utils/helper';
import { getAuthToken } from '../utils/auth';

const { REACT_APP_IDENTITY_API } = process.env;

const APIs = {
  userRoles: `${REACT_APP_IDENTITY_API}/api/v1/user-roles`,
};

export function* userRoleFetchSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { page, limit, search } = action.payload;
    const queryParams = {
      page: page,
      limit: limit,
      search: search
    };

    const res = yield fetch(
      `${APIs.userRoles}?${helper.serializeQueryString(queryParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Có lỗi xảy ra' });
    }

    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    yield put(actions.fetchUserRoleSuccess(parsedRes.data));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export function* userByRoleFetchSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { roleId, ...restParams } = action.payload;

    const res = yield fetch(
      `${REACT_APP_IDENTITY_API}/api/v1/user-roles/${roleId}/users?${helper.serializeQueryString(restParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Có lỗi xảy ra' });
    }

    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    yield put(actions.fetchUserByRoleSuccess(parsedRes.data));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export function* roleByUserFetchSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { userId, ...restParams } = action.payload;

    const res = yield fetch(
      `${REACT_APP_IDENTITY_API}/api/v1/user-roles/${userId}/roles?${helper.serializeQueryString(restParams)}`,
      {
        method: 'GET',
        headers: {
          Authorization: getAuthToken(),
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Có lỗi xảy ra' });
    }

    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    yield put(actions.fetchRoleByUserSuccess(parsedRes.data));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export default function* userRoleSagaWatcher() {
  yield takeLeading(actionTypes.USER_ROLE_FETCH, userRoleFetchSaga);
  yield takeLeading(actionTypes.USER_BY_ROLE_FETCH, userByRoleFetchSaga);
  yield takeLeading(actionTypes.ROLE_BY_USER_FETCH, roleByUserFetchSaga);
}
