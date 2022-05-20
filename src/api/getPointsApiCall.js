import { getPoints } from 'utils/getPoints';

export const getPointsApiCall = () =>
    new Promise((res) => setTimeout(() => res({ payload: getPoints() }), 2000));
