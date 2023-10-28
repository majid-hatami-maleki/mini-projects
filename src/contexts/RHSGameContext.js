import React, { createContext } from 'react'
const RHSGameContexts = createContext() 

export default function RHSGameContextProvider({children}) {
  return (
    <RHSGameContexts.Provider value={'this is RHS game'}>
        {children}
    </RHSGameContexts.Provider>
  )
}
export {RHSGameContexts}