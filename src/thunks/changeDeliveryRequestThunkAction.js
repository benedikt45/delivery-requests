import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDeliveryRequestAction } from 'actions/changeDeliveryRequest';
import { renderPointsThunkAction } from './renderPointsThunkAction';

export const changeDeliveryRequestThunkAction = createAsyncThunk(
    'changeDeliveryRequest',
    async (fields, { dispatch, getState }) => {
        const {
            appReducer: { mapMarkers },
        } = getState();
        dispatch(changeDeliveryRequestAction(fields));
        if (mapMarkers?.deliveryRequestId && mapMarkers?.deliveryRequestId === fields.id) {
            await dispatch(renderPointsThunkAction(fields.id));
        }
    },
);
