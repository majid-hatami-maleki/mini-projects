import React, { createContext } from 'react'

const vowelCounterContexts = createContext()


export default function VowelCounterContextProvider({children}) {
  return (
   <vowelCounterContexts.Provider value={'this is vowel counter context'}> 
    {children}
   </vowelCounterContexts.Provider>
  )
}
export {vowelCounterContexts}