import React, { createContext, useState } from "react";
let EXTrackerContexts = createContext();
function ExTrackerContextProvider({ children }) {
  const dt = new Date();
  const currTime = `${dt.getHours()}:${dt.getMinutes()}`;
  const currDate = `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()}`;
  const [events, setEvents] = useState([]);
  const [newEventPaySubject , setNewEventPaySubject] = useState('buy laptop')
  const [newEventPaySource ,setNewEventPaySource] = useState('wallet')
  const [newEventPayAmount , setNewEventPayAmount] = useState(12000)
  function addNewEvent(params) {
    let allEvents = [...events];
    let newEvent = {};
    newEvent.id = `event-` + allEvents.length + 1;
    newEvent.time = currTime;
    newEvent.date = currDate;
    newEvent.paymentSubject = newEventPaySubject
    newEvent.paymentSource = newEventPaySource
    newEvent.paymentAmount = newEventPayAmount
    console.log(newEvent);
  }
  return (
    <EXTrackerContexts.Provider
      value={{
        addNewEvent,
      }}
    >
      {children}
    </EXTrackerContexts.Provider>
  );
}
export { EXTrackerContexts, ExTrackerContextProvider };
