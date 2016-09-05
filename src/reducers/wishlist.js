import { combineReducers } from 'redux';
import * as actionTypes from '~/actionTypes';

const allSkus = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.RECEIVE_DATA:
            return state.concat(payload.wishlist.map(item => item.sku));
        case actionTypes.ADD_ITEM_FROM_WISHLIST:
            return state.filter((sku) => sku !== payload.sku);
        case actionTypes.ADD_ITEM_TO_WISHLIST:
            return state.concat([ payload.sku ]);
        default:
            return state;
    }
};

const bySku = (state = {}, { type, payload }) => {
    let nextState = {};

    switch (type) {
        case actionTypes.RECEIVE_DATA:
            nextState = { ...state };

            payload.wishlist.forEach((item) => {
                nextState[item.sku] = item;
            });

            return nextState;
        case actionTypes.ADD_ITEM_FROM_WISHLIST:
            nextState = { ...state };
            delete nextState[ payload.sku ];

            return nextState;
        case actionTypes.ADD_ITEM_TO_WISHLIST:
            return {
                ...state,
                [ payload.sku ]: payload
            };
        default:
            return state;
    }
};

export function showWishlist(state = false, { type }) {
    switch (type) {
        case actionTypes.SHOW_WISHLIST:
            return true;
        case actionTypes.HIDE_WISHLIST:
            return false;
        default:
            return state;
    }
}

export function getWishlistProducts(state) {
    return state.allSkus.map((sku) => state.bySku[sku]);
}

export default combineReducers({
    allSkus,
    bySku,
    showWishlist
});
