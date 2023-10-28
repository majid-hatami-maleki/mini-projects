import React, { createContext } from "react";

let EXTrackerContexts = createContext();

function ExTrackerContextProvider({ children }) {
  return (
    <EXTrackerContexts.Provider value={"this is EXTrackerContexts"}>
      {children}
    </EXTrackerContexts.Provider>
  );
}
export { EXTrackerContexts, ExTrackerContextProvider };
