import { takeEvery, takeLeading, put, call, all, fork } from 'redux-saga/effects';
import userSagaWatcher from './user';
import roleSagaWatcher from './role';
import productSagaWatcher from './product';


export default function* appSagaWatcher() {
  yield all([
    fork(userSagaWatcher),
    fork(roleSagaWatcher),
    fork(productSagaWatcher)
  ])
};