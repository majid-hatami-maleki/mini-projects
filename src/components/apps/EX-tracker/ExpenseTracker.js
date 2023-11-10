import React, { useContext } from 'react'
import './ExTracker.css'
import AppsHeader from '../../appsHeader/AppsHeader'
import MainContainer from '../../appsContainer/MainContainer'
import { EXTrackerContexts } from '../../../contexts/ExpenseTrackerContext'
export default function ExpenseTracker() {
    const contexts = useContext(EXTrackerContexts)
    console.log(contexts.addNewEvent())
  return (
    <MainContainer>
        <AppsHeader class={'Ex-header'}/>
    </MainContainer>
  )
}

