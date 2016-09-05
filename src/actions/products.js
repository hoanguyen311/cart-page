import * as actionTypes from '~/actionTypes';

export function updateQuantity(payload) {
    return {
        type: actionTypes.UPDATE_QUANTITY,
        payload
    };
}

export function removeItem(payload) {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload
    };
}
