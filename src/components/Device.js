import React from 'react';
import DeviceDetail from './DeviceDetails/DeviceDetail';

const Device = ({name, price}) => {
    return (
        <div>
            <h1>NAME: {name}</h1>
            <DeviceDetail price={price}/>
        </div>
    );
};

export default Device;