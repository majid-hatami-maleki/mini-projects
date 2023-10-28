import React, { useContext } from 'react'
import './app.css'
import { allContexts } from '../../contexts/context'
export default function App() {
    const fetchContexts = useContext(allContexts)
    console.log(fetchContexts)
  return (
    <div className='app-container'>App</div>
  )
}
