import React, { useState } from "react";

function DigitalClock() {
    setInterval(updateTime, 1000);
    let now = new Date().toLocaleString();
    const [time, setTime] = useState(now);

    function updateTime() {
        let currentTime = new Date().toLocaleString();
        setTime(currentTime);
    }
    return (
        <div style={{ backgroundColor: "#2388B8" }}>
            <h1>React Digital Clock</h1>
            <h3>Date & Time: {time}</h3>
        </div >
    )
}

export default DigitalClock;