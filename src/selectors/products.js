import { createSelector } from 'reselect';
import { compose } from 'redux';

const getCleanPrice = (price) => {
    if (price || price === 0) {
        return parseInt(price.toString().replace(/\D/g, ''));
    }

    return 0;
};
const getPrice = (state, sku) => state.bySku[sku].price;
const getProducts = (state) => state.products;
const getQuantity = (state, sku) => state.bySku[sku].quantity;

export const calculateSubTotalValue = createSelector(
    getProducts,
    (state) => {
        return state.allSkus.reduce(
            (total, sku) =>
                (total + compose(getCleanPrice, getPrice)(state, sku) * getQuantity(state, sku)),
            0)
        ;
    }
);
