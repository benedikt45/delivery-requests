import React, { useEffect } from 'react';

export const Map = ({ initMap }) => {
    useEffect(() => {
        initMap();
    }, []);

    return <div id='map' className='map'></div>;
};
