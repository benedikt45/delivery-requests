export const getPolylineApiCall = ({ start, end }) =>
    new Promise((res, rej) =>
        setTimeout(() => res({ payload: [start, end], success: true }), 3000),
    );
