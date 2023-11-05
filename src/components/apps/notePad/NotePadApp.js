import React from 'react'
import './note.css'
import AppsHeader from '../../appsHeader/AppsHeader'
import MainContainer from '../../appsContainer/MainContainer'
export default function NotePadApp() {
  return (
    <MainContainer>
        <AppsHeader class={'note-header'}/>
    </MainContainer>
  )
}
