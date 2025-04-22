import React, { useState, useEffect } from "react";
import "./explore.css";
import { useSavedEvents } from "../../context/SavedEventsContext";
import SearchBar from "../../components/searchbar/searchbar";
import { fetchEvents } from "../../context/api";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";

function Explore() {
  // const { addSavedEvent } = useSavedEvents();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const eventsArray = await fetchEvents();
      if (eventsArray) {
        setEvents(eventsArray);
      }
    })();
  }, []);

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
      <SearchBar />

      {/* Category Rows (using BrowseCategories) */}
      <BrowseCategories events={events} />
    </div>
  );
}

export default Explore;
