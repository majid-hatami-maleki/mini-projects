import React, { useState } from 'react'
import './AHeader.css'
import { NavLink , useParams} from 'react-router-dom'
export default function AppsHeader(props) {
  return (
    <div className={`a-header-container ${props.class}`}>
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
