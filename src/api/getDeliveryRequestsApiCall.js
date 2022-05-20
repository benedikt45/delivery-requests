import { getDeliveryRequests } from 'utils/getDeliveryRequests';

export const getDeliveryRequestsApiCall = () =>
    new Promise((res) => setTimeout(() => res({ payload: getDeliveryRequests() }), 1000));
