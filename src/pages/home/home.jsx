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
      <Header />
      <BrowseCategories events={events} />
    </div>
  );
}

export default Home;
