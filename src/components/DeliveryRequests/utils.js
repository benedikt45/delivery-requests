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
            onChange={(value) => {
                setPolylineIsLoading(true);
                changeRequest({
                    fields: { [fieldName]: value, id: record.key },
                    callback: () => setPolylineIsLoading(false),
                });
            }}
            className='select'>
            {points.map((point) => (
                <Option value={point.id} key={point.id}>
                    {point.name}
                </Option>
            ))}
        </Select>
    );

export const getMaxPageSize = (recordHeight) => Math.floor(window.innerHeight / recordHeight) - 2;

export const getColumns = (points, changeRequest, setTableIsLoading) => [
    {
        title: 'Заявка',
        dataIndex: 'name',
    },
    {
        title: 'Погрузка',
        dataIndex: 'start',
        render: render(points, changeRequest, setTableIsLoading, 'startPointId'),
    },
    {
        title: 'Разгрузка',
        dataIndex: 'end',
        render: render(points, changeRequest, setTableIsLoading, 'endPointId'),
    },
];
