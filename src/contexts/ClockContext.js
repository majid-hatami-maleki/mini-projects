import React, { createContext } from 'react'

let clockContexts = createContext()

function ClockContextProvider({children}) {
  return (
    <clockContexts.Provider value={'this is clock context'}>
        {children}
    </clockContexts.Provider>
  )
}
export{clockContexts , ClockContextProvider}