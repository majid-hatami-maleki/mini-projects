import React from 'react'
import { Route,Routes , useParams } from 'react-router-dom'
import Home from './../components/pages/home/Home'
import Contact from '../components/pages/contact/Contact'
import DigitalClockApp from '../components/apps/clock/DigitalClockApp'
import RHSGame from '../components/apps/rhsGame/RHSGame'
import VowelCounter from '../components/apps/vowelCounter/VowelCounter'
export default function Routers() {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/clock' element={<DigitalClockApp/>} />
        <Route path='/rhs' element={<RHSGame/>} />
        <Route path='/vwc' element={<VowelCounter/>} />
    </Routes>
  )
}
