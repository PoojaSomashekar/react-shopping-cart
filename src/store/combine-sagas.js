import { all, fork } from 'redux-saga/effects';

import productSagas from './get-products/sagas';

export default function* rootSaga() {
  yield all([...productSagas])
};