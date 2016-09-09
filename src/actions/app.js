import * as actionTypes from '~/actionTypes';
import * as api from '~/api';

export function showLoading() {
    return {
        type: actionTypes.SHOW_LOADING
    };
}

export function hideLoading() {
    return {
        type: actionTypes.HIDE_LOADING
    };
}

export function receiveData(payload) {
    return {
        type: actionTypes.RECEIVE_DATA,
        payload
    };
}

export function requestData() {
    return {
        type: actionTypes.REQUEST_DATA
    };
};
