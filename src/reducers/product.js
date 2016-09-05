import * as actionTypes from '~/actionTypes';

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, { type, payload }) {
    switch (type) {
        case actionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                quantity: payload.quantity
            };
        default:
            return state;
    }
}
