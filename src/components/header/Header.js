import React, { useContext } from "react";
import "./header.css";
import { overallContexts } from "../../contexts/overallContext";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const contexts = useContext(overallContexts);
  return (
    <header>
      <nav>
        <ul>
          {contexts.homePage ? (
            <li className="activePage">
              <NavLink
                to="/"
                onClick={(e) => {
                  contexts.setHomePage(true);
                  contexts.contactPage(false);
                }}
              >
                Home
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/"
                onClick={(e) => {
                  contexts.setHomePage(true);
                  contexts.contactPage(false);
                }}
              >
                Home
              </NavLink>
            </li>
          )}

          {contexts.contactPage ? (
            <li className="activePage">
              <NavLink
                to="/contact"
                onClick={(e) => {
                  contexts.setHomePage(false);
                  contexts.setContactPage(true);
                }}
              >
                Contact
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/contact"
                onClick={(e) => {
                  contexts.setHomePage(false);
                  contexts.setContactPage(true);
                }}
              >
                Contact
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
