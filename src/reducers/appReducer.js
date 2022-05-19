import { createReducer } from '@reduxjs/toolkit';
import { changeDeliveryRequestAction } from 'actions/changeDeliveryRequest';
import { resetAppStoreAction } from 'actions/resetAppStoreAction';
import { setMapAction } from 'actions/setMapAction';
import { storeMarkersAction } from 'actions/storeMarkers';

const initialState = {
    map: null,
    points: [
        { id: 1, name: 'Точка 1', coordinates: [51.505, -0.09] },
        { id: 2, name: 'Точка 2', coordinates: [51.405, -0.09] },
        { id: 3, name: 'Точка 3', coordinates: [51.325, -0.09] },
        { id: 4, name: 'Точка 4', coordinates: [51.605, -0.09] },
    ],
    deliveryRequests: [
        { id: 1, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 2, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 3, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 4, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
    ],
    mapMarkers: {},
};

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(resetAppStoreAction, () => initialState)
        .addCase(setMapAction, (state, { payload: map }) => {
            state.map = map;
        })
        .addCase(changeDeliveryRequestAction, (state, { payload: fields }) => {
            state.deliveryRequests = state.deliveryRequests.map((r) => {
                if (r.id === fields.id) {
                    return { ...r, ...fields };
                }
                return r;
            });
        })
        .addCase(storeMarkersAction, (state, { payload: mapMarkers }) => {
            state.mapMarkers = mapMarkers;
        });
});
