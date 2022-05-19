import { Table } from 'antd';
import React, { useState } from 'react';
import { getData, render } from './utils';

export const DeliveryRequests = ({
    deliveryRequests,
    points,
    changeRequest,
    renderPoints,
    refs,
}) => {
    const [polylineIsLoading, setPolylineIsLoading] = useState(false);

    const columns = [
        {
            title: 'Заявка',
            dataIndex: 'name',
        },
        {
            title: 'Погрузка',
            dataIndex: 'start',
            render: render(points, changeRequest, setPolylineIsLoading, 'startPointId'),
        },
        {
            title: 'Разгрузка',
            dataIndex: 'end',
            render: render(points, changeRequest, setPolylineIsLoading, 'endPointId'),
        },
    ];
    const dataSource = getData(deliveryRequests, points);

    return (
        <div className='requestsWrapper' ref={refs}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowSelection={{
                    type: 'radio',
                    onChange: async (_, selectedRows) => {
                        setPolylineIsLoading(true);
                        await renderPoints(selectedRows[0].key);
                        setPolylineIsLoading(false);
                    },
                }}
                pagination={{ position: ['none', 'none'] }}
                className='requests'
                loading={polylineIsLoading}
            />
        </div>
    );
};
