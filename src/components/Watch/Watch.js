import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
const Watch = () => {
    const [steps, setSteps] = useState(0);
    const runFast = ()=>{
        setSteps(steps + 1);
    }
    useEffect(()=>{
        console.log(steps)
    },[steps])
    return (
      <div style={{ border: "2px solid purple", margin: "15px" }}>
        <h2>This is Cacio Watch</h2>
        <h3>My Current step {steps}</h3>
        <button onClick={runFast}>Run Fast</button>

        <Display name="Garmin" steps={steps} />
      </div>
    );
};

export default Watch;