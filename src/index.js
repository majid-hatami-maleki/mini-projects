import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { ExTrackerContextProvider } from "./contexts/ExpenseTrackerContext";
import { ClockContextProvider } from "./contexts/ClockContext";
import VowelCounterContextProvider from "./contexts/VowelCounterContext";
import RHSGameContextProvider from "./contexts/RHSGameContext";
import OverallContextProvider from "./contexts/overallContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <OverallContextProvider>
      <RHSGameContextProvider>
        <VowelCounterContextProvider>
          <ExTrackerContextProvider>
            <ClockContextProvider>
              <App />
            </ClockContextProvider>
          </ExTrackerContextProvider>
        </VowelCounterContextProvider>
      </RHSGameContextProvider>
    </OverallContextProvider>
  </>
);
