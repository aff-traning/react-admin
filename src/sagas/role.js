import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';
import * as helper from '../utils/helper';
import { getAuthToken } from '../utils/auth';

const { REACT_APP_IDENTITY_API } = process.env;

const APIs = {
  roles: `${REACT_APP_IDENTITY_API}/api/v1/roles`,
};

export function* roleFetchSaga(action) {
  try {
    // yield put(actions.setLoading());
    const { page, limit, search } = action.payload;
    const queryParams = {
      page: page,
      limit: limit,
      search: search
    };

    const res = yield fetch(
      `${APIs.roles}?${helper.serializeQueryString(queryParams)}`,
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
    yield put(actions.fetchRoleSuccess(parsedRes.data));
    // yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export default function* roleSagaWatcher() {
  yield takeLeading(actionTypes.ROLE_FETCH, roleFetchSaga);
}
