import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actionTypes from '~/actionTypes';
import * as appActions from '~/actions/app';
import { loadData } from '~/api';

function* data() {
    yield* takeLatest(actionTypes.REQUEST_DATA, function* (){
        yield put(appActions.showLoading());
        const { success, data } = yield call(loadData);

        if (success) {
            yield put(appActions.receiveData(data));
        }
        yield put(appActions.hideLoading());
    });
}

export default function* () {
    yield [
        data()
    ];
}
