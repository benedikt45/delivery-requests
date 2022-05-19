import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMapAction } from 'actions/setMapAction';
import L from 'leaflet';
import IconImg from 'leaflet/dist/images/marker-icon.png';
import IconShadowImg from 'leaflet/dist/images/marker-shadow.png';

export const initMapThunkAction = createAsyncThunk(
    'initMapThunkAction',
    (fields, { dispatch, getState }) => {
        const {
            appReducer: { map },
        } = getState();
        if (!map) {
            const mapInstance = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(mapInstance);
            L.Marker.prototype.options.icon = L.icon({
                iconUrl: IconImg,
                shadowUrl: IconShadowImg,
            });
            dispatch(setMapAction(mapInstance));
        }
    },
);
