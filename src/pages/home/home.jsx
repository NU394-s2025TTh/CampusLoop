// src/pages/home/home.jsx
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import "./home.css";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import { fetchEvents } from "../../context/api";

function Home() {

  const [events, setEvents] = useState([]);

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


  return (
    <div className="home-container">
      <Header name="Desmond" />
      <BrowseCategories
        categorizedEvents={[
          { category: "Sports", events: filterEventsByCategory("Sports") },
          { category: "Music", events: filterEventsByCategory("Music") },
          { category: "Arts", events: filterEventsByCategory("Arts") },
          { category: "Campus Life", events: filterEventsByCategory("Campus Life") },
        ]}
      />
    </div>
  );
}

export default Home;
