import * as actionTypes from '~/actionTypes';
import format from 'format-number';

const DEFAULT_STATE = {
    priceConfigs: {
        currency: 'VND',
        decimalPoint: ',',
        precision: 0,
        thoudsandsDep: '.',
        currencyPosition: 'right'
    },
    shippingFee: 0
};

function priceConfigs(state, { type, payload }) {
    switch (type) {
        case actionTypes.RECEIVE_DATA:
            return {
                ...state,
                ...payload.priceConfigs
            };
        default:
            return state;
    }
}

export default function(state = DEFAULT_STATE, { type, payload }) {
    switch (type) {
        case actionTypes.RECEIVE_DATA:
            return {
                ...state,
                priceConfigs: priceConfigs(state.priceConfigs, { type, payload }),
                shippingFee: payload.shippingFee
            };
        default:
            return state;
    }
}

export function formatPrice(state, price) {
    return format({
        suffix: ` ${state.currency}`,
        padRight: state.precision,
        decimal: state.decimalPoint,
        integerSeparator: state.thoudsandsDep
    })(price);
}
