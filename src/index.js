import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
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
            <ClockContextProvider>
              <App />
            </ClockContextProvider>
        </VowelCounterContextProvider>
      </RHSGameContextProvider>
    </OverallContextProvider>
  </>
);
