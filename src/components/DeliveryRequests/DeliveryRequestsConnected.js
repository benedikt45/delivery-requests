import { connect } from 'react-redux';
import { changeDeliveryRequestThunkAction } from 'thunks/changeDeliveryRequestThunkAction';
import { renderPointsThunkAction } from 'thunks/renderPointsThunkAction';
import { DeliveryRequests } from './DeliveryRequests';

const mapToStateProps = (state) => ({
    deliveryRequests: state.appReducer.deliveryRequests,
    points: state.appReducer.points,
});

const mapDispatchToProps = (dispatch) => ({
    changeRequest: (fields) => dispatch(changeDeliveryRequestThunkAction(fields)),
    renderPoints: (deliveryRequestId) => dispatch(renderPointsThunkAction(deliveryRequestId)),
});

export const DeliveryRequestsConnected = connect(mapToStateProps, mapDispatchToProps, null, {
    forwardRef: true,
})(DeliveryRequests);
