import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './combine-reducers';
import rootSaga from './combine-sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;