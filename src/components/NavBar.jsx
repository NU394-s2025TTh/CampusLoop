import "./NavBar.css"

import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export function NavBar() {
  return (
    <div className="navbar">
        <footer>
          <button>
            <IoHomeOutline />
          </button>
          <button>
            <FaSearch />
          </button>
          <button>
            <FaRegSave />
          </button>
          <button>
            <CgProfile />
          </button>
        </footer>
    </div>
  );
}
