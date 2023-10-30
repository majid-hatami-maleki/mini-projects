import React from 'react'
import './homePage.css'
import { Link,navLink } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <h2>projects</h2>
        <ul>
            <li>
                <Link>digital clock</Link>
                <Link>expense tracker</Link>
                <Link>vowel counter</Link>
                <Link>rock,hand,scissor game</Link>
            </li>
        </ul>
    </div>
  )
}
