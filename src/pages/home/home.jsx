// src/pages/home/home.jsx
import React, { useState, useEffect } from "react";
import { EventCard } from "../../components/EventCard/EventCard";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import "./home.css";
import { db } from "../../firebase";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";


import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventsRef = collection(db, "events");
        const eventsQuery = query(eventsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(eventsQuery);
        const eventsArray = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            key: doc.id,
            linkToTicket: data.linkToTicket,
            description: data.description,
            image: data.imageSrc,
            name: data.name,
            date: data.date,
            time: data.time,
            location: data.location,
          };
        });
        setEvents(eventsArray);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <Header name="Desmond" />
      </div>
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="Search for an event..."
        />
        <div className="filter-bar">
          <button className="filter-chip">Date</button>
          <button className="filter-chip">Category</button>
          <button className="filter-chip">More Filters</button>
        </div>
      </div>
      {/* <div className="events-list">
        {events.map((event) => (
          <EventCard
            key={event.key}
            image={event.image}
            name={event.name}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            linkToTicket={event.linkToTicket}
          />
        ))}
      </div> */}
      <BrowseCategories events={events} /> 

    </div>
  );
}

export default Home;
