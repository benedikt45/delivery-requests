import { Spin } from 'antd';

export const Spinner = () => (
    <div className='spinner__wrapper'>
        <div className='spinner__background'></div>
        <Spin size='large' className='spinner' />
    </div>
);
