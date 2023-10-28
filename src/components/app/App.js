import React, { useContext } from 'react'
import './app.css'
import { clockContexts } from '../../contexts/ClockContext'
import { EXTrackerContexts } from '../../contexts/ExpenseTrackerContext'
import { vowelCounterContexts } from '../../contexts/VowelCounterContext'
import { RHSGameContexts } from '../../contexts/RHSGameContext'

export default function App() {
    const clockContS= useContext(clockContexts)
    const ExContS = useContext(EXTrackerContexts)
    const VowelContS = useContext(vowelCounterContexts)
    const RHSContS = useContext(RHSGameContexts)
  return (
    <div className='app-container'>App</div>
  )
}
