import { call, put, takeLatest, fork } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import * as services from '../../server/product-services';

const getMensCloths = function* () {
  const path = 'men\'s clothing';
  const uri = `https://fakestoreapi.com/products/category/${path}`;
  try {
    const result = yield call(axios.get, uri);
    yield put(actions.recievedMensClothingAction(result.data))
  } catch (error) {
    console.log(error);
  }
};

const getWomensClothing = function* () {
  const path = 'women\'s clothing';
  const uri = `https://fakestoreapi.com/products/category/${path}`;
  try {
    const result = yield call(axios.get, uri);
    yield put(actions.recievedwomensClothingAction(result.data))
  } catch (error) {
    console.log(error);
  }

};

const getJewels = function* () {
  const uri = 'https://fakestoreapi.com/products/category/jewelery';
  try {
    const result = yield call(axios.get, uri);
    yield put(actions.recievedJewelleryAction(result.data))
  } catch (error) {
    console.log(error);
  }

};

const getElectronics = function* () {
  const uri = 'https://fakestoreapi.com/products/category/electronics';
  try {
    const result = yield call(axios.get, uri);
    yield put(actions.recievedElectronicsAction(result.data))
  } catch (error) {
    console.log(error);
  }

};

export const watchMensClothing = function* () {
  yield takeLatest(actions.ActionTypes.GET_MENS_CLOTHING, getMensCloths)
};

export const watchWomensClothing = function* () {
  yield takeLatest(actions.ActionTypes.GET_WOMENS_CLOTHING, getWomensClothing)
};

export const watchJewels = function* () {
  yield takeLatest(actions.ActionTypes.GET_JWELLERY, getJewels)
};

export const watchElectronics = function* () {
  yield takeLatest(actions.ActionTypes.GET_ELECTRONICS, getElectronics)
};

const productSagas = [fork(watchMensClothing),
fork(watchWomensClothing),
fork(watchJewels),
fork(watchElectronics)
];

export default productSagas;