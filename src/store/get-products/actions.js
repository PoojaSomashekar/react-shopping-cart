export const ActionTypes = {
    GET_MENS_CLOTHING: 'GET_MENS_CLOTHING',
    RECIEVED_MENS_CLOTHING: 'RECIEVED_MENS_CLOTHING',
    GET_WOMENS_CLOTHING: 'GET_WOMENS_CLOTHING',
    RECIEVED_WOMENS_CLOTHING: 'RECIEVED_WOMENS_CLOTHING',
    GET_JWELLERY: 'GET_JWELLERY',
    RECIEVED_JWELLERY: 'RECIEVED_JWELLERY',
    GET_ELECTRONICS: 'GET_ELECTRONICS',
    RECIEVED_ELECTRONICS: 'RECIEVED_ELECTRONICS',
};

export const getMensClothingAction = () => ({
    type: ActionTypes.GET_MENS_CLOTHING
});

export const recievedMensClothingAction = mensCloths => ({
    type: ActionTypes.RECIEVED_MENS_CLOTHING,
    payload: mensCloths
});

export const getwomensClothingAction = () => ({
    type: ActionTypes.GET_WOMENS_CLOTHING
});

export const recievedwomensClothingAction = womensCloths => ({
    type: ActionTypes.RECIEVED_WOMENS_CLOTHING,
    payload: womensCloths
});

export const getJewelleryAction = () => ({
    type: ActionTypes.GET_JWELLERY
});

export const recievedJewelleryAction = jewels => ({
    type: ActionTypes.RECIEVED_JWELLERY,
    payload: jewels
});
export const getElectronicsAction = () => ({
    type: ActionTypes.GET_ELECTRONICS
});

export const recievedElectronicsAction = electronics => ({
    type: ActionTypes.RECIEVED_ELECTRONICS,
    payload: electronics
});

