import { useState, useEffect } from "react";
import "./explore.css";
import { useSavedEvents } from "../../context/SavedEventsContext";
import SearchBar from "../../components/searchbar/searchbar";
import { fetchEvents } from "../../context/api";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import {
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firestore";

function Explore() {
  const { addSavedEvent } = useSavedEvents();
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    (async () => {
      const eventsArray = await fetchEvents();
      if (eventsArray) {
        setEvents(eventsArray);
      }
    })();
  }, []);

  function filterEventsByCategory(category) {
    return events.filter((event) => event.Category === category);
  }

  const handleSearch = async (term) => {
    setHasSearched(true);

    try {
      const q = query(
        collection(db, "events"),
        orderBy("name"),
        startAt(term),
        endAt(term + "\uf8ff"),
      );

      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({
        key: doc.id,
        ...doc.data(),
      }));
      setSearchResults(results);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  const handleClearSearch = () => {
    setHasSearched(false);
    setSearchResults([]);
  };

  return (
    <div className="explore-container">
      {/* Hero Banner (optional) */}
      <div className="explore-hero">
        <div className="explore-hero-content">
          <h2 className="explore-hero-title">Featured Event</h2>
          {/* <p>Don’t miss out on our biggest event this week!</p> */}
        </div>
      </div>

      <h2 className="explore-title">Explore!</h2>
      <SearchBar onSearch={handleSearch} />

      {/* Clear search option */}
      {hasSearched && (
        <button className="clear-search-btn" onClick={handleClearSearch}>
          Clear Search
        </button>
      )}

      {/* Conditional Formatting: Search Grid or Browse Categories */}
      {hasSearched ? (
        <div className="search-grid">
          {searchResults.length > 0 ? (
            searchResults.map((event) => (
              <EventCard
                key={event.key}
                image={event.imageSrc}
                name={event.name}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                linkToTicket={event.linkToTicket}
              />
            ))
          ) : (
            <p style={{ color: "white" }}>No results found.</p>
          )}
        </div>
      ) : (
        <BrowseCategories
          categorizedEvents={[
            { category: "Sports", events: filterEventsByCategory("Sports") },
            { category: "Music", events: filterEventsByCategory("Music") },
            { category: "Arts", events: filterEventsByCategory("Arts") },
            {
              category: "Campus Life",
              events: filterEventsByCategory("Campus Life"),
            },
          ]}
        />
      )}
    </div>
  );
}

export default Explore;
