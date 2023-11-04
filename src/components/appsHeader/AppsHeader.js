import React from 'react'
import './AHeader.css'
import { NavLink } from 'react-router-dom'
export default function AppsHeader() {
  return (
    <div className='a-header-container'>
        <ul>
            <li>
                <NavLink to={'/clock'}>digital-clock</NavLink>
            </li>
            <li>
                <NavLink to={'/rhs'}>Rock,Scissor,Hand-game</NavLink>
            </li>
            <li>
                <NavLink to={'/vwc'}>vowel-counter</NavLink>
            </li>
            <li>
                <NavLink to={'/EXTracker'}>expense-tracker</NavLink>
            </li>
            <li>
                <NavLink to={'/noteP'}>take-note</NavLink>
            </li>
        </ul>
    </div>
  )
}
