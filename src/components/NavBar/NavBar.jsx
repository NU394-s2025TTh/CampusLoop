import "./NavBar.css"

import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export function NavBar() {
  return (
    <div className="">
        <footer className="navbar-buttons">
          <button className="nav-icon">
            <FaHome className="icon"/>
          </button>
          <button className="nav-icon">
            <FaSearch className="icon"/>
          </button>
          <button className="nav-icon">
            <FaBookmark className="icon"/>
          </button>
          <button className="nav-icon">
            <IoPerson className="icon"/>
          </button>
        </footer>
    </div>
  );
}
