import { connect } from 'react-redux';
import { initMapThunkAction } from 'thunks/initMapThunkAction';
import { Map } from './Map';

const mapDispatchToProps = (dispatch) => ({
    initMap: (map) => dispatch(initMapThunkAction()),
});

export const MapConnected = connect(null, mapDispatchToProps)(Map);
