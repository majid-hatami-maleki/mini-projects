import React, { createContext, useState } from "react";
let EXTrackerContexts = createContext();
function ExTrackerContextProvider({ children }) {
  const dt = new Date();
  const currTime = `${dt.getHours()}:${dt.getMinutes()}`;
  const currDate = `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDay()}`;
  const [allTransactions, setAllTransactions] = useState([1,2,3]);
  const [newEventPaySubject , setNewEventPaySubject] = useState('buy laptop')
  const [newEventPaySource ,setNewEventPaySource] = useState('wallet')
  const [newEventPayAmount , setNewEventPayAmount] = useState(12000)
  function addNewEvent(params) {
    let allEvents = []
    let newTransaction = {};
    newTransaction.id = `event-` + allEvents.length + 1;
    newTransaction.time = currTime;
    newTransaction.date = currDate;
    newTransaction.paymentSubject = newEventPaySubject
    newTransaction.paymentSource = newEventPaySource
    newTransaction.paymentAmount = newEventPayAmount
    console.log(newTransaction);
  }
  return (
    <EXTrackerContexts.Provider
      value={{
        addNewEvent,allTransactions
      }}
    >
      {children}
    </EXTrackerContexts.Provider>
  );
}
export { EXTrackerContexts, ExTrackerContextProvider };
