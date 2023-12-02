import React from "react";
import "./homePage.css";
import { Link, NavLink, useParams } from "react-router-dom";
export default function Home() {
const params = useParams()
console.log(JSON.stringify(params))
  return (
    <div className="home-container">
      <h2>projects</h2>
      <ul className="home-apps-container">
        <li>
          <NavLink to="/clock">Digital clock app </NavLink>
        </li>
        <li>
          <NavLink to="/rhs">rock,hand,scissor game</NavLink>
        </li>
        <li>
          <NavLink to="/vwc">vowel counter app</NavLink>
        </li>
      </ul>
    </div>
  );
}
