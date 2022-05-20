import { changeDeliveryRequestAction } from 'actions/changeDeliveryRequest';
import { renderPointsSagaAction } from 'actions/saga/renderPointsSagaAction';
import { put, select, takeEvery } from 'redux-saga/effects';

export const changeDeliveryRequestSaga = function* () {
    yield takeEvery('saga/changeDeliveryRequest', function* ({ payload: { callback, fields } }) {
        const {
            appReducer: { mapMarkers },
        } = yield select();
        yield put(changeDeliveryRequestAction(fields));
        if (mapMarkers?.deliveryRequestId && mapMarkers?.deliveryRequestId === fields.id) {
            yield put(renderPointsSagaAction({ callback, deliveryRequestId: fields.id }));
        } else {
            callback();
        }
    });
};
