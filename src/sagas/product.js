import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';
import { getAuthToken } from '../utils/auth';

const APIs = {
  supplier: `https://test-api.hahalolo.com/api/app/supplier/search`,
};

export function* getListSupplier(action) {
  try {
    const { keyword, sorting, skipCount, maxResultCount } = action.payload;
    
    const res = yield fetch(
      APIs.supplier,
      {
        method: 'POST',
        body: JSON.stringify({
          'keyword': keyword,
          'sorting': sorting,
          'skipCount': skipCount,
          'maxResultCount': maxResultCount
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAuthToken()
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Thông tin không đúng' });
    }
    
    const parsedRes = yield Promise.resolve(res).then(_ => _.json());
    const listSupplier = {
      totalCount: parsedRes.totalCount,
      items: parsedRes.items,
    };

    yield put(actions.setListSupplier(listSupplier));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export default function* productSagaWatcher() {
  yield takeLeading(actionTypes.PRODUCT_GET_LIST_SUPPLIER, getListSupplier);
}

