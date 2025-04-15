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

  return (
    <div className="home-container">
      <Header name="Desmond" />
      <BrowseCategories
        categorizedEvents={[
          { category: "Sports", events },
          { category: "Music", events },
          { category: "Arts", events },
          { category: "Campus Life", events },
        ]}
      />
    </div>
  );
}

export default Home;
