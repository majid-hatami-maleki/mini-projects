import React, { createContext } from 'react'
const overallContexts = createContext()


export default function OverallContextProvider({children}) {
  return (
    <overallContexts.Provider value={'overall context'}>
        {children}
    </overallContexts.Provider>
  )
}
export {overallContexts}