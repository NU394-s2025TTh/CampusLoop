import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import "./Layout.css";

function Layout() {
  return (
    <div className="app-wrapper">
      <div className="inner-container">
        <div className="scrollable-content">
          <Outlet />
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Layout;
