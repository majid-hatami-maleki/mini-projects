import React, { useContext, useEffect } from "react";
import "./vowel.css";
import { vowelCounterContexts } from "../../../contexts/VowelCounterContext";
export default function VowelCounter() {
    const contexts = useContext(vowelCounterContexts)
    useEffect(() => {
        contexts.vowelCounterHandler()
    }, [contexts.input])
    
  return (
    <div className="vowel-container">
      <h2>vowel counter</h2>
      <div className="sub-container">
        <textarea cols="30" rows="10" value={contexts.input} onChange={e => {
            contexts.setInput(e.target.value)
        }}
        ></textarea>
        <div className="score-board">
            <p>vowels : {contexts.vowels}</p>
        </div>
      </div>
    </div>
  );
}
