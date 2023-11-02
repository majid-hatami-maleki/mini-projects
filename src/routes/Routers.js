import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './../components/pages/home/Home'
import Contact from '../components/pages/contact/Contact'
import DigitalClockApp from '../components/apps/clock/DigitalClockApp'
import RHSGame from '../components/apps/rhsGame/RHSGame'
import VowelCounter from '../components/apps/vowelCounter/VowelCounter'
import ExpenseTracker from '../components/apps/EX-tracker/ExpenseTracker'
import NotePadApp from '../components/apps/notePad/NotePadApp'
export default function Routers() {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/clock' element={<DigitalClockApp/>} />
        <Route path='/rhs' element={<RHSGame/>} />
        <Route path='/vwc' element={<VowelCounter/>} />
        <Route path='/EXTracker' element={<ExpenseTracker/>} />
        <Route path='/noteP' element={<NotePadApp/>} />
    </Routes>
  )
}
