import { initMapSagaAction } from 'actions/saga/initMapSagaAction';
import { connect } from 'react-redux';
import { Map } from './Map';

const mapDispatchToProps = (dispatch) => ({
    initMap: (map) => dispatch(initMapSagaAction(map)),
});

export const MapConnected = connect(null, mapDispatchToProps)(Map);
