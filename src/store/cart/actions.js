export const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CHECK_OUT_CART: 'CHECK_OUT_CART'
}

export const addToCartAction = (cartObject) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartObject
})

export const removeFromCartAction = (id) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id
})

export const checkoutFromCartAction = (id) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id
})