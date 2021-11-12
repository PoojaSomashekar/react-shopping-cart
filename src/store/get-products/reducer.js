import * as actions from './actions';

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ActionTypes.RECIEVED_MENS_CLOTHING:
      return {
        products: action.payload
      };
    case actions.ActionTypes.RECIEVED_WOMENS_CLOTHING:
      return {
        products: action.payload
      };
    case actions.ActionTypes.RECIEVED_JWELLERY:
      return {
        products: action.payload
      };
    case actions.ActionTypes.RECIEVED_ELECTRONICS:
      return {
        products: action.payload
      };
    default:
      return state;
  }
}

export default productsReducer;