import { all } from 'redux-saga/effects';
import { changeDeliveryRequestSaga } from './changeDeliveryRequestSaga';
import { initMapSaga } from './initMapSaga';
import { loadDataSaga } from './loadDataSaga';
import { renderPointsSaga } from './renderPointsSaga';

export const sagas = function* () {
    yield all([initMapSaga(), renderPointsSaga(), changeDeliveryRequestSaga(), loadDataSaga()]);
};
