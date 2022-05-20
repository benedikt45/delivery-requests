import { all } from 'redux-saga/effects';
import { changeDeliveryRequestSaga } from './changeDeliveryRequestSaga';
import { initMapSaga } from './initMapSaga';
import { renderPointsSaga } from './renderPointsSaga';

export const sagas = function* () {
    yield all([initMapSaga(), renderPointsSaga(), changeDeliveryRequestSaga()]);
};
