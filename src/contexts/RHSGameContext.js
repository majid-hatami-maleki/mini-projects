import React, { createContext, useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
const RHSGameContexts = createContext();

const actions = [
  {
    id: 1,
    name: "rock",
    icon: <FaHandRock />,
    fight : function (playerAction) {
        if(this.name === playerAction.name){
            return 'draw'
        }else if(playerAction.name === 'scissor'){
            return `CPU won`
        }else{
            return 'player won'
        }
    }   
  },
  {
    id: 2,
    name: "paper",
    icon: <FaHandPaper />,
    fight : function (playerAction) {
        if(this.name === playerAction.name){
            return 'draw'
        }else if(playerAction.name === 'rock'){
            return `CPU won`
        }else{
            return 'player won'
        }
    }  
  },
  {
    name: "scissor",
    id : 3,
    icon: <FaHandScissors />,
    fight : function (playerAction) {
        if(this.name === playerAction.name){
            return 'draw'
        }else if(playerAction.name === 'paper'){
            return `CPU won`
        }else{
            return 'player won'
        }
    }  
  },
];
export default function RHSGameContextProvider({ children }) {
const [playerActionResult, setPlayerActionResult] = useState()
const [cpuActionResult , setCpuActionResult] = useState()
const [result , setResult] = useState()


function actionsHandler(action) {
    let randomNumber = Math.floor(Math.random() * 3)
    let cpuAction = actions[randomNumber]
    setPlayerActionResult(action.icon)
    setCpuActionResult(cpuAction.icon)
    setResult(cpuAction.fight(action))
}

  return (
    <RHSGameContexts.Provider
      value={{
        actions,playerActionResult,cpuActionResult,actionsHandler,result
      }}
    >
      {children}
    </RHSGameContexts.Provider>
  );
}
export { RHSGameContexts };
