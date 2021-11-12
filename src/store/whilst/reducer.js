import React from 'react';
import { WhilstActionTypes } from '../whilst/actions';

const initialState = {
  whilstProduct: []

}

const whilstReducer = (state = initialState, action) => {
  switch (action.type) {
    case WhilstActionTypes.ADD_TO_WHILST:
      return {
        ...state,
        whilstProduct: action.payload.whilstProduct
      }
    case WhilstActionTypes.REMOVE_FROM_WHILST:
      return {
        ...state,
        whilstProduct: action.payload.whilstProduct
      }
    default:
      return state;
  }

}

export default whilstReducer;