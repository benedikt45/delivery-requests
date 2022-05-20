import { setMapAction } from 'actions/setMapAction';
import L from 'leaflet';
import IconImg from 'leaflet/dist/images/marker-icon.png';
import IconShadowImg from 'leaflet/dist/images/marker-shadow.png';
import { put, select, takeEvery } from 'redux-saga/effects';

export const initMapSaga = function* () {
    yield takeEvery('saga/initMap', function* () {
        const {
            appReducer: { map },
        } = yield select();
        if (!map) {
            const mapInstance = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(mapInstance);
            L.Marker.prototype.options.icon = L.icon({
                iconAnchor: [13, 41],
                iconUrl: IconImg,
                shadowUrl: IconShadowImg,
            });
            yield put(setMapAction(mapInstance));
        }
    });
};
