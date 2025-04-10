import "./NavBar.css"
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export function NavBar() {
  return (
    <div className="">
        <footer className="navbar-buttons">
          
          <Link to="/" className="nav-icon">
            <FaHome className="icon" />
          </Link>
          <Link to="/explore" className="nav-icon">
            <FaSearch className="icon" />
          </Link>
          <Link to="/saved" className="nav-icon">
            <FaBookmark className="icon"/>
          </Link>
          <Link to="/profile" className="nav-icon">
            <IoPerson className="icon"/>
          </Link>
        </footer>
    </div>
  );
}
