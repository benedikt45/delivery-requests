import { createAsyncThunk } from '@reduxjs/toolkit';
import { storeMarkersAction } from 'actions/storeMarkers';
import L from 'leaflet';
import { getStartEndPointsById } from 'utils/getStartEndPointsById';

export const renderPointsThunkAction = createAsyncThunk(
    'renderPoints',
    async (deliveryRequestId, { dispatch, getState }) => {
        const {
            appReducer: { map, points, deliveryRequests, mapMarkers },
        } = getState();
        mapMarkers.markers?.forEach((marker) => map.removeLayer(marker));
        const deliveryRequest = deliveryRequests.find((r) => r.id === deliveryRequestId);
        const foundPoints = getStartEndPointsById(
            points,
            deliveryRequest.startPointId,
            deliveryRequest.endPointId,
        );
        const startMarker = L.marker(foundPoints[0].coordinates).addTo(map);
        const endMarker = L.marker(foundPoints[1].coordinates).addTo(map);
        // Fetch polyline imitation
        await new Promise((res) => setTimeout(res, 3000));
        const polyline = L.polyline([foundPoints[0].coordinates, foundPoints[1].coordinates]).addTo(
            map,
        );
        dispatch(
            storeMarkersAction({ deliveryRequestId, markers: [startMarker, endMarker, polyline] }),
        );
    },
);
