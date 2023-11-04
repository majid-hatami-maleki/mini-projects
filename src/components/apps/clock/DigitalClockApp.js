import React, { useContext, useEffect, useState } from "react";
import "./DClock.css";
import { clockContexts } from "../../../contexts/ClockContext";
export default function DigitalClockApp() {
  const contexts = useContext(clockContexts);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
        clearInterval(interval);
      };
  }, []);


  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  return (
    <div className="clock-container">
      <h2>Digital_clock app</h2>
      <div className="clock-display">
        <span>{hours}</span> : <span>{minutes}</span> :
        <span>{seconds}</span>
      </div>
    </div>
  );
}
