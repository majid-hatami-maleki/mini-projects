import React, { createContext, useState } from "react";

const vowelCounterContexts = createContext();

export default function VowelCounterContextProvider({ children }) {
    let counter = 0;
  const [input, setInput] = useState("");
  const [vowels, setVowels] = useState();
  const vowelCounterHandler = function (e) {
      const vowels = ["a", "i", "e", "o", "u"];
      let userInput = [...input];
      userInput.forEach((ui) => {
          if (vowels.includes(ui)) {
              counter++;
            }
        });
        setVowels(counter);
  };
  return (
    <vowelCounterContexts.Provider
      value={{
        input,
        setInput,
        vowelCounterHandler,
        vowels,
      }}
    >
      {children}
    </vowelCounterContexts.Provider>
  );
}
export { vowelCounterContexts };
