import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getColumns, getData, getMaxPageSize } from './utils';

const recordHeight = 65;

export const DeliveryRequests = ({
    deliveryRequests,
    points,
    changeRequest,
    renderPoints,
    refs,
    loadData,
}) => {
    const [tableIsLoading, setTableIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState(getMaxPageSize(recordHeight));

    useEffect(() => {
        setTableIsLoading(true);
        loadData(() => setTableIsLoading(false));

        const resizeListener = () => {
            setPageSize(getMaxPageSize(recordHeight));
        };
        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    const dataSource = getData(deliveryRequests, points);
    const columns = getColumns(points, changeRequest, setTableIsLoading);

    return (
        <div className='requestsWrapper' ref={refs}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowSelection={{
                    type: 'radio',
                    onChange: (_, selectedRows) => {
                        setTableIsLoading(true);
                        renderPoints({
                            deliveryRequestId: selectedRows[0].key,
                            callback: () => setTableIsLoading(false),
                        });
                    },
                }}
                pagination={{ position: ['none', 'bottomCenter'], pageSize }}
                className='requests'
                loading={tableIsLoading}
            />
        </div>
    );
};
