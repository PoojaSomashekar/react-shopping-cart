import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";

import productsReducer from "./get-products/reducer";
import whilstReducer from "./whilst/reducer";

const reducers = combineReducers({
  products: productsReducer,
  whilstProducts: whilstReducer,
  cartObject: cartReducer
})

export default reducers;