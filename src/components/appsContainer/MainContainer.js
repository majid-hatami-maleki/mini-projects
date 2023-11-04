import React from 'react'
import './MC.css'
export default function MainContainer({children}) {
  return (
    <div className='main-container'>
        {children}
    </div>
  )
}
