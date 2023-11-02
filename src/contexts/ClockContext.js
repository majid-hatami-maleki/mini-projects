import React, { createContext, useState } from 'react'

let clockContexts = createContext()


function ClockContextProvider({children}) { 
  return (
    <clockContexts.Provider value={{}}>
        {children}
    </clockContexts.Provider>
  )
}
export{clockContexts , ClockContextProvider}