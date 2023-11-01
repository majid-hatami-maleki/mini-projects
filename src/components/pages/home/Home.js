import React from "react";
import "./homePage.css";
import { Link, NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <h2>projects</h2>
      <ul className="home-apps-container">
        <li>
          <NavLink to="/clock">Digital clock app </NavLink>
        </li>
        <li>
          <NavLink to="/clock">rock,hand,scissor game</NavLink>
        </li>
        <li>
          <NavLink to="/vwc">vowel counter app</NavLink>
        </li>
        <li>
          <NavLink to="/EXTracker">expense tracker app</NavLink>
        </li>
        <li>
          <NavLink to="/noteP">take notes app</NavLink>
        </li>
      </ul>
    </div>
  );
}
