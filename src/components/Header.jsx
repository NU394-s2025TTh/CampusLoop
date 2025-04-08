import { FaCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";
import "../App.css"
import React from 'react';

export function Header() {
  return (
    <div className="App-header">
      <h1>Stay in the Loop</h1>
      <div className="header-buttons">
        <button>
            <FaCalendarAlt />
        </button>
        <button>
            <FaPlus />
        </button>
        <button>
            <FaHeart />
        </button>
        <button>
            <VscSmiley />
      </button>
      </div>
    </div>
  );
}
