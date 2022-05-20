import { getRandomId } from './getRandomId';
import { getRandomNumber } from './getRandomNumber';

export const getDeliveryRequests = () => {
    const requests = [];
    for (let i = 1; i <= 30; i++) {
        const startPointId = getRandomNumber(1, 6);
        let endPointId = getRandomNumber(1, 6);
        while (startPointId === endPointId) {
            endPointId = getRandomNumber(1, 6);
        }
        requests.push({
            id: getRandomId(),
            name: `Заявка на доставку ${i}`,
            startPointId,
            endPointId,
        });
    }
    return requests;
};
