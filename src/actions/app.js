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

export function loadData() {
    return dispatch => {
        dispatch(showLoading());

        return api.loadData()
            .then(({ success, data }) => {
                dispatch(receiveData(data));
                dispatch(hideLoading());
            });
    };
}
