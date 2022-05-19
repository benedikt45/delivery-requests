export const getStartEndPointsById = (points, startPointId, endPointId) => {
    const foundPoints = [];
    points.forEach((point) => {
        if (point.id === startPointId) {
            foundPoints[0] = { name: point.name, coordinates: point.coordinates };
        }
        if (point.id === endPointId) {
            foundPoints[1] = { name: point.name, coordinates: point.coordinates };
        }
    });
    return foundPoints;
};
