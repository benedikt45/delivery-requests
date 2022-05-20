import { createReducer } from '@reduxjs/toolkit';
import { changeDeliveryRequestAction } from 'actions/changeDeliveryRequest';
import { loadDataAction } from 'actions/loadDataAction';
import { resetAppStoreAction } from 'actions/resetAppStoreAction';
import { setMapAction } from 'actions/setMapAction';
import { storeMarkersAction } from 'actions/storeMarkers';

const initialState = {
    map: null,
    points: [],
    deliveryRequests: [],
    mapMarkers: {},
};

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(resetAppStoreAction, () => initialState)
        .addCase(setMapAction, (state, { payload: map }) => {
            state.map = map;
        })
        .addCase(changeDeliveryRequestAction, (state, { payload: fields }) => {
            state.deliveryRequests = state.deliveryRequests.map((request) => {
                if (request.id === fields.id) {
                    return { ...request, ...fields };
                }
                return request;
            });
        })
        .addCase(storeMarkersAction, (state, { payload: mapMarkers }) => {
            state.mapMarkers = mapMarkers;
        })
        .addCase(loadDataAction, (state, { payload: { points, deliveryRequests } }) => {
            state.deliveryRequests = deliveryRequests;
            state.points = points;
        });
});
