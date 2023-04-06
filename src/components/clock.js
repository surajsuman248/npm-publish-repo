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
        <h1>Date & Time: {time}</h1>
    )
}

export default DigitalClock;