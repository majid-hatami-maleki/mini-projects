import React from "react";
import './header.css'
import { Link,NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
