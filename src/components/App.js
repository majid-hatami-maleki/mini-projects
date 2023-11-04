import React, { useContext } from "react";
import "./app.css";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Routers from "../routes/Routers";
import Header from "./header/Header";
import AppsHeader from "./appsHeader/AppsHeader";

/*
1- install react bootstrap for responsive
2- introduce home screen
*/
export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <AppsHeader />
        <main>
          <Routers />
        </main>
      </BrowserRouter>
    </div>
  );
}
