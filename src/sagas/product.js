import { takeEvery, takeLeading, put, call } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

const APIs = {
  supplier: `https://test-api.hahalolo.com/api/app/supplier/search`,
};

export function* getListSupplier(action) {
  try {
    const { keyword, sorting, skipCount, maxResultCount } = action.payload;
    console.log('SAGA BEFORE CALL API');
    const res = yield fetch(
      APIs.supplier,
      {
        method: 'POST',
        body: new URLSearchParams({
          'keyword': keyword,
          'sorting': sorting,
          'skipCount': skipCount,
          'maxResultCount': maxResultCount
        }),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // Authorization: 'Basic Q29yZV9BcHA6MXEydzNlKg==',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE1OTY4NTA5NjcsImV4cCI6MTU5NjkzNzM2NywiaXNzIjoiaHR0cHM6Ly90ZXN0LWlkZW50aXR5LmhhaGFsb2xvLmNvbSIsImF1ZCI6IkNvcmUiLCJjbGllbnRfaWQiOiJDb3JlX0FwcCIsInN1YiI6IjdjN2IxNDU2LTE3NDEtYTJkMy1mZWQyLTM5ZjUzZmI2MjJkNyIsImF1dGhfdGltZSI6MTU5Njg1MDk2NywiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImhhaGFsb2xvLmFmZkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJzY29wZSI6WyJDb3JlIl0sImFtciI6WyJwd2QiXX0.auey4Xs-956wZfGuE44LGf7IfMu3sQSISH7Rcd9f5veitUL3KBL02FbqJvkFpVeGqMVTRSx0QCkFnexwbbIuiKGCu831hMxqg8pBn5O5c2TgER5Bj63im-GDAl9twG--TEQ0ZD3SYw-jKEfc7f7WHwXHtiot-Q9EQTlB9LUtINvqrQhUSWoSi0ATWtF7nuTDUhFh91DMdXuAiRNdNYFX9W6bRtrGZi-Ao9g9e0FkaiOi5jz_wboRbscC0AvT3vurUVX-HaJD86KokEXzrkqFsYVrL4RPR_yBazW-iK8mxYuRzEjjyebxhJgHd3pSimmb1iGnR3EMmFvFFN4v4PTyJQ',
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
      // items: parsedRes.items,
    };

    yield put(actions.setListSupplier(listSupplier));
  } catch (e) {
    yield put(actions.showMessage(e.message));
  }
}

export default function* productSagaWatcher() {
  yield takeLeading(actionTypes.PRODUCT_GET_LIST_SUPPLIER, getListSupplier);
}

