import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      navigate(`/searchresults?q=${encodeURIComponent(input.trim())}`);
    }
  };

  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Search for an event..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
}

export default SearchBar;
