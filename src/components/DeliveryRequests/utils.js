import { Select } from 'antd';
import React from 'react';
import { getStartEndPointsById } from 'utils/getStartEndPointsById';

export const getData = (requests, points) => {
    return requests.map(({ id, name, startPointId, endPointId }) => {
        const foundPoints = getStartEndPointsById(points, startPointId, endPointId);
        return {
            name,
            start: foundPoints[0].name,
            end: foundPoints[1].name,
            key: id,
        };
    });
};

const { Option } = Select;
export const render = (points, changeRequest, setPolylineIsLoading, fieldName) => (point, record) =>
    (
        <Select
            defaultValue={point}
            onChange={async (value) => {
                setPolylineIsLoading(true);
                await changeRequest({ [fieldName]: value, id: record.key });
                setPolylineIsLoading(false);
            }}
            className='select'>
            {points.map((point) => (
                <Option value={point.id} key={point.id}>
                    {point.name}
                </Option>
            ))}
        </Select>
    );
