import React, { useContext, useEffect, useState } from "react";
import "./DClock.css";
import { clockContexts } from "../../../contexts/ClockContext";
import MainContainer from "../../appsContainer/MainContainer";
import AppsHeader from './../../appsHeader/AppsHeader'
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
    <MainContainer>
       <AppsHeader/>
      <div className="clock-display">
        <span>{hours}</span> : <span>{minutes}</span> :
        <span>{seconds}</span>
      </div>
    </MainContainer>
  );
}
