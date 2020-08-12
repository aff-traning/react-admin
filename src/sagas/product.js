import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

const APIs = {
  supplier: `https://test-api.hahalolo.com/api/app/supplier/search`,
};

export function* getListSupplier(action) {
  try {
    const { keyword, sorting, skipCount, maxResultCount, accessToken } = action.payload;
    console.log('SAGA BEFORE CALL API');
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
          Authorization: accessToken
          // Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE1OTcxMTczNjEsImV4cCI6MTU5NzIwMzc2MSwiaXNzIjoiaHR0cHM6Ly90ZXN0LWlkZW50aXR5LmhhaGFsb2xvLmNvbSIsImF1ZCI6IkNvcmUiLCJjbGllbnRfaWQiOiJDb3JlX0FwcCIsInN1YiI6IjdjN2IxNDU2LTE3NDEtYTJkMy1mZWQyLTM5ZjUzZmI2MjJkNyIsImF1dGhfdGltZSI6MTU5NzExNzM2MSwiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImhhaGFsb2xvLmFmZkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJzY29wZSI6WyJhZGRyZXNzIiwiZW1haWwiLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiLCJyb2xlIiwiQ29yZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.X2Rwst19dCc_N57zp-3eUWpExvEsgNPpja8E11O-JVcGA97peinx2VGj5AYp3bOreM8p7XztUnS-wK6RyvzrozilMxnyOZd3HhaYKE4Wuu--5W4iyJN7E83gY7KQe68D_96B9qoxmF6tY-5-lgfhoyvUPvgt8aR0O3S8GDWHUWXr2-mOfUfbGbwJHOiWdCj9P0oEq0gi9lrUrfcG6UdYjihNfoOA2yTSxfX5KJpqHZ9nvEdszjIYi4M-vaF5u-eoPccqAycTObvNTnsuB6Co0A7mPAKFaVVrFEWWUxpp8nKwQyo1OEtTQAm8iufw7MsgUqS3XF5hv-ekHNZr_0cBAw',
        },
      }
    );

    if (!res || res.status !== 200) {
      throw Object({ message: 'Thông tin không đúng' });
    }
    console.log('SAGA AFTER CALL API');
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

