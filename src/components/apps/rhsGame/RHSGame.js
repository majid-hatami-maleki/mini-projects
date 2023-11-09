import React, { useContext } from "react";
import "./rhs.css";
import AppsHeader from "../../appsHeader/AppsHeader";
import MainContainer from "../../appsContainer/MainContainer";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { RHSGameContexts } from "../../../contexts/RHSGameContext";

export default function RHSGame() {
  const contexts = useContext(RHSGameContexts);
  console.log(contexts.actions);
  return (
    <MainContainer>
      <AppsHeader class={"rhs-header"} />
      <div className="rhs-container">
        <div className="actions-result-display">
          <div className="player-actions-result">
            {contexts.playerActionResult}
            <h2>player</h2>
          </div>
          <h1>{contexts.result}</h1>
          <div className="cpu-actions-result">
            {contexts.cpuActionResult}
            <h2>Cpu</h2>
            </div>
        </div>
        <div className="player-actions-options">
          {contexts.actions.map((action) => (
            <button
              key={action.id}
              onClick={() => {
                contexts.actionsHandler(action);
              }}
            >
              {action.icon}
            </button>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
