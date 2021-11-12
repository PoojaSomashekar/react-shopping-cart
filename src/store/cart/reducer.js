import React from 'react';

import * as actions from './actions';

const initialState = {
  products: [],
  totalQuantity: 0
};

const cartReducer = (state = initialState, action) => {
  const addCartItemFunc = () => {
    const newItem = action.payload;
    const existingItem = state.products.find(item => item.id === newItem.id);
    state.totalQuantity++;
    if (!existingItem) {
      state.products.push({
        id: newItem.id,
        image: newItem.image,
        totalPrice: newItem.price,
        price: newItem.price,
        title: newItem.title,
        quantity: 1
      })
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    }

  };
  const removeCartItemFunc = () => {
    const delID = action.payload;
    let itemExist = state.products.find(item => item.id === delID);
    state.totalQuantity--;
    if (itemExist) {
      if (itemExist.quantity === 1) {
        state.products = state.products.filter(item => item.id !== delID);
      } else {
        itemExist.quantity--;
        itemExist.totalPrice = itemExist.totalPrice - itemExist.price;
      }
    }
  };
  const checkOutCartItemFunc = () => {
    const delID = action.payload;
    let itemExist = state.products.find(item => item.id === delID);
    state.totalQuantity--;
    if (itemExist) {
      state.products = state.products.filter(item => item.id !== delID);
    }
  };
  switch (action.type) {
    case actions.CartActionTypes.ADD_TO_CART:
      addCartItemFunc();
      return {
        ...state,
        products: [...state.products],
        totalQuantity: state.totalQuantity
      }
    case actions.CartActionTypes.REMOVE_FROM_CART:
      removeCartItemFunc();
      return {
        ...state,
        products: [...state.products],
        totalQuantity: state.totalQuantity
      }
    case actions.CartActionTypes.REMOVE_FROM_CART:
      checkOutCartItemFunc();
      return {
        ...state,
        products: [...state.products],
        totalQuantity: state.totalQuantity
      }
    default:
      return state;
  }
}

export default cartReducer;