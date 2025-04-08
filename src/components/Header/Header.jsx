import { FaCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";
import React from 'react';

export function Header({name}) {
  return (
    <div className="">
      <h1>Stay in the Loop, {name}</h1>
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
