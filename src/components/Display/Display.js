import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
      <div style={{border: '2px solid green', margin: '15px'}}>
        <h3>Name: {props.name}</h3>
        <h4>So far so Today {props.steps}</h4>
        <Dail steps={props.steps}/>
      </div>
    );
};

export default Display;