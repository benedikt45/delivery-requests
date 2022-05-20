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
        { id: 5, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 6, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 73, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 5424, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 31, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 212, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 783, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 3544, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 13453, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 372, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 433, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 57864, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 211, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 7862, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 33453, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 4738, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 1321231, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 7862, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 35343, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 54684, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 78971, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 2, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 12373, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 1234, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 7687862, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 533, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 344, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
        { id: 453781, name: 'Заявка на доставку 1', startPointId: 1, endPointId: 2 },
        { id: 312332, name: 'Заявка на доставку 2', startPointId: 1, endPointId: 2 },
        { id: 733, name: 'Заявка на доставку 3', startPointId: 1, endPointId: 2 },
        { id: 4354, name: 'Заявка на доставку 4', startPointId: 1, endPointId: 2 },
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
