import app from './app';
import products from './products';
import orderSummary from './orderSummary';
import wishlist from './wishlist';
import { combineReducers } from 'redux';

export default combineReducers({
    app,
    products,
    orderSummary,
    wishlist
});
