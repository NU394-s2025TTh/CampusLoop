import { useState } from "react";
import algoliasearch from "algoliasearch";
import "./searchbar.css";

function SearchBar({ onSearch }) {
  const appID = "ZMCX8B53ID";
  const apiKey = "a9efa54725a3aada722387ede2634154";
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // initialize once
  const client = algoliasearch(appID, apiKey);
  const index = client.initIndex("events");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      setLoading(true);
      setError(null);
      try {
        const { hits } = await index.search(input.trim(), {
          hitsPerPage: 20, // optional params
          attributesToRetrieve: [
            "EventName",
            "Date",
            "Time",
            "Location",
            "Description",
            "LinktoImage",
            "LinktoTicket",
          ],
        });
        onSearch(hits);
      } catch (err) {
        console.error("Algolia search error:", err);
        setError("Search failed, please try again.");
      } finally {
        setLoading(false);
      }
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
      {loading && <div className="search-loading">Searching…</div>}
      {error && <div className="search-error">{error}</div>}
    </div>
  );
}

export default SearchBar;
