import React from 'react';

const Dail = (props) => {
    return (
        <div style={{border: '1px solid red', margin: '15px'}}>
            <h3>This is Dial</h3>
            <h4>So far so Dial {props.steps}</h4>
        </div>
    );
};

export default Dail;