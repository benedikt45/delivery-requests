import { DeliveryRequestsConnected } from 'components/DeliveryRequests/DeliveryRequestsConnected';
import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { appStore } from 'store/appStore';
import './App.css';
import './App.scss';
import { MapConnected } from './components/Map';

const App = () => {
    const sliderRef = useRef();
    const changeableBlockRef = useRef();

    useEffect(() => {
        if (sliderRef.current && changeableBlockRef.current) {
            sliderRef.current.onmousedown = (e) => {
                let dragX = e.clientX;
                document.onmousemove = function onMouseMove(e) {
                    changeableBlockRef.current.style.width =
                        changeableBlockRef.current.offsetWidth + e.clientX - dragX + 'px';
                    dragX = e.clientX;
                };
                document.onmouseup = () => (document.onmousemove = document.onmouseup = null);
            };
        }
    }, [sliderRef, changeableBlockRef]);

    return (
        <div className='App'>
            <Provider store={appStore}>
                <div className='wrapper'>
                    <DeliveryRequestsConnected refs={changeableBlockRef} />
                    <div className='slider' ref={sliderRef} />
                    <MapConnected />
                </div>
            </Provider>
        </div>
    );
};

export default App;
