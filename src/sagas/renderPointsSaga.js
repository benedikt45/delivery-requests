import { storeMarkersAction } from 'actions/storeMarkers';
import { getPolylineApiCall } from 'api/getPolylineApiCall';
import L from 'leaflet';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getStartEndPointsById } from 'utils/getStartEndPointsById';

export const renderPointsSaga = function* () {
    yield takeEvery('saga/renderPoints', function* ({ payload: { callback, deliveryRequestId } }) {
        const {
            appReducer: { map, points, deliveryRequests, mapMarkers },
        } = yield select();
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
        let response;
        try {
            response = yield call(getPolylineApiCall, {
                start: foundPoints[0].coordinates,
                end: foundPoints[1].coordinates,
            });
        } catch (e) {
            // Some error handle
            return;
        }
        const polylineCoordinates = response.payload;
        const polyline = L.polyline(polylineCoordinates).addTo(map);
        map.fitBounds(
            [foundPoints[0].coordinates, foundPoints[1].coordinates, polylineCoordinates],
            {
                padding: [50, 50],
            },
        );
        yield put(
            storeMarkersAction({ deliveryRequestId, markers: [startMarker, endMarker, polyline] }),
        );
        callback();
    });
};
