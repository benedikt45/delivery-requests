import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getData, getMaxPageSize, render } from './utils';

const recordHeight = 65;

export const DeliveryRequests = ({
    deliveryRequests,
    points,
    changeRequest,
    renderPoints,
    refs,
}) => {
    const [polylineIsLoading, setPolylineIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState(getMaxPageSize(recordHeight));

    useEffect(() => {
        const resizeListener = () => {
            setPageSize(getMaxPageSize(recordHeight));
        };
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

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
                    onChange: (_, selectedRows) => {
                        setPolylineIsLoading(true);
                        renderPoints({
                            deliveryRequestId: selectedRows[0].key,
                            callback: () => setPolylineIsLoading(false),
                        });
                    },
                }}
                pagination={{ position: ['none', 'bottomCenter'], pageSize }}
                className='requests'
                loading={polylineIsLoading}
            />
        </div>
    );
};
