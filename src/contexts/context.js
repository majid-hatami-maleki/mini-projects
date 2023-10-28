import React, { createContext } from 'react'
let allContexts = createContext()

function ContextProvider({children}) {
  return (
    <allContexts.Provider value={1}>
        {children}
    </allContexts.Provider>
  )
}
export{allContexts , ContextProvider}