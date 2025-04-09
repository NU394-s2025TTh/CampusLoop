import { FaRegCalendar } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import React from 'react';
import "./Header.css"

export function Header({name}) {
  return (
    <div className="">
      <h1>Stay in the Loop, {name}</h1>
      <div className="header-buttons">
        <button className="header-icon">
            <FaRegCalendar className="icon"/>
            <span className="icon-label">This week</span>
        </button>
        <button className="header-icon">
            <FaFire className="icon"/>
            <span className="icon-label">New</span>
        </button>
        <button className="header-icon">
            <FaRegHeart className="icon"/>
            <span className="icon-label">Most saved</span>
        </button>
        <button className="header-icon">
            <FaRegSmile className="icon"/>
            <span className="icon-label">Free events</span>
      </button>
      </div>
    </div>
  );
}
