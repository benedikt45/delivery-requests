import { changeDeliveryRequestSagaAction } from 'actions/saga/changeDeliveryRequestSagaAction';
import { renderPointsSagaAction } from 'actions/saga/renderPointsSagaAction';
import { connect } from 'react-redux';
import { DeliveryRequests } from './DeliveryRequests';

const mapToStateProps = (state) => ({
    deliveryRequests: state.appReducer.deliveryRequests,
    points: state.appReducer.points,
});

const mapDispatchToProps = (dispatch) => ({
    changeRequest: (data) => dispatch(changeDeliveryRequestSagaAction(data)),
    renderPoints: (data) => dispatch(renderPointsSagaAction(data)),
});

export const DeliveryRequestsConnected = connect(mapToStateProps, mapDispatchToProps, null, {
    forwardRef: true,
})(DeliveryRequests);
