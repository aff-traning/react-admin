import { takeEvery, takeLeading, put, call, all, fork } from 'redux-saga/effects';
import userSagaWatcher from './user';
import roleSagaWatcher from './role';
import userRoleSagaWatcher from './user-role';


export default function* appSagaWatcher() {
  yield all([
    fork(userSagaWatcher),
    fork(roleSagaWatcher),
    fork(userRoleSagaWatcher)
  ])
};