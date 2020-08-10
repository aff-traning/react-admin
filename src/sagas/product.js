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
        body: JSON.stringify({
          'keyword': keyword,
          'sorting': sorting,
          'skipCount': skipCount,
          'maxResultCount': maxResultCount
        }),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // Authorization: 'Basic Q29yZV9BcHA6MXEydzNlKg==',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE1OTcwMjM0ODksImV4cCI6MTU5NzEwOTg4OSwiaXNzIjoiaHR0cHM6Ly90ZXN0LWlkZW50aXR5LmhhaGFsb2xvLmNvbSIsImF1ZCI6IkNvcmUiLCJjbGllbnRfaWQiOiJDb3JlX0FwcCIsInN1YiI6IjdjN2IxNDU2LTE3NDEtYTJkMy1mZWQyLTM5ZjUzZmI2MjJkNyIsImF1dGhfdGltZSI6MTU5NzAyMzQ4OSwiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImhhaGFsb2xvLmFmZkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJzY29wZSI6WyJhZGRyZXNzIiwiZW1haWwiLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiLCJyb2xlIiwiQ29yZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.n5arO9-HrTxSorEhkf81AQlwsaFLlmMONUF6Siufk2rA4pRdtdssEPLzepk-TTyG8ARxracyH5mYGU-wLLnIPpqrWpagPpEne06oyM3P7DOlgd6w2MrmldlTNzRtr_iv0WeHA1hgdk-g0vzYPwSrjqSmlqWJYCd_ig6HDfQQ8yDKh8AMrIxFfrVNihIY5TifTVnwDTWFJHTPqeSe6OCY_kOtz5Xq0uPMbF2K6EIys-K_uSrqbhwaXD9QlXjCrkcHs_H76A3ZB_YFsu-gBpX0UhYGFPsqNPNHJtFDIyjEP7-w8mnip2RCqBGRIKmlUTjb3hLGlVT9CuUwePTBmuenlg',
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

