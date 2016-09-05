import { createSelector } from 'reselect';
import { formatPrice } from '~/reducers/orderSummary';
import { calculateSubTotalValue } from './products';

const getPriceConfigs = (state) => state.orderSummary.priceConfigs;
const getShippingFeeValue = (state) => state.orderSummary.shippingFee;

export const getSubTotal = createSelector(
    getPriceConfigs,
    calculateSubTotalValue,
    (priceConfigs, subTotal) => formatPrice(priceConfigs, subTotal)
);

export const getShippingFee = createSelector(
    getPriceConfigs,
    getShippingFeeValue,
    (priceConfigs, shippingFee) => formatPrice(priceConfigs, shippingFee)
);

export const getTotal = createSelector(
    getPriceConfigs,
    calculateSubTotalValue,
    getShippingFeeValue,
    (priceConfigs, subTotal, shippingFee) => formatPrice(priceConfigs, subTotal + shippingFee)
);
