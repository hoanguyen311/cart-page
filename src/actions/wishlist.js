import * as actionTypes from '~/actionTypes';

export function addItemFromWishlist(payload) {
    return {
        type: actionTypes.ADD_ITEM_FROM_WISHLIST,
        payload
    };
}

export function addItemToWishlist(payload) {
    return {
        type: actionTypes.ADD_ITEM_TO_WISHLIST,
        payload
    };
}

export function showWishlist() {
    return {
        type: actionTypes.SHOW_WISHLIST
    };
}
export function hideWishlist() {
    return {
        type: actionTypes.HIDE_WISHLIST
    };
}
