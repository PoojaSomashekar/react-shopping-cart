export const WhilstActionTypes = {
    ADD_TO_WHILST: 'ADD_TO_WHILST',
    REMOVE_FROM_WHILST: 'REMOVE_FROM_WHILST'
};

export const addToWhilstAction = (productObject) => ({
    type: WhilstActionTypes.ADD_TO_WHILST,
    payload: productObject
});

export const removeFromWhilstAction = (productObject) => ({
    type: WhilstActionTypes.REMOVE_FROM_WHILST,
    payload: productObject
})

