import { loadDataAction } from 'actions/loadDataAction';
import { getDeliveryRequestsApiCall } from 'api/getDeliveryRequestsApiCall';
import { getPointsApiCall } from 'api/getPointsApiCall';
import { call, put, takeEvery } from 'redux-saga/effects';

export const loadDataSaga = function* () {
    yield takeEvery('saga/loadData', function* ({ payload: callback }) {
        try {
            const { payload: points } = yield call(getPointsApiCall);
            const { payload: deliveryRequests } = yield call(getDeliveryRequestsApiCall);
            yield put(loadDataAction({ deliveryRequests, points }));
            callback();
        } catch (e) {
            // Some error handle
        }
    });
};
