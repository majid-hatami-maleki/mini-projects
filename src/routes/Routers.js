import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './../components/pages/home/Home'
import Contact from '../components/pages/contact/Contact'

export default function Routers() {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}
