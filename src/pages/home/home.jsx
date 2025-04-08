
import React from 'react';

import { useState } from 'react';
import { EventCard } from '../../components/EventCard/EventCard';
import { Header } from '../../components/Header/Header';
import { NavBar } from '../../components/NavBar/NavBar';
import img from '../../../assets/event.jpg';
import './home.css';


function Home() {

  const newEvent = {
    id: 0,
    imageSrc: img,
    name: "NU Men's Basketball vs. Iowa",
    date: "Mar 20",
    time: "8:00pm",
    location: "Welsh Ryan Arena"
  }

  const [events, setEvents] = useState([
    <EventCard
        key={newEvent.id}
        image={newEvent.imageSrc}
        name={newEvent.name}
        date={newEvent.date}
        time={newEvent.time}
        location={newEvent.location}
      />,
      <EventCard
      key={newEvent.id}
      image={newEvent.imageSrc}
      name={newEvent.name}
      date={newEvent.date}
      time={newEvent.time}
      location={newEvent.location}
    />
  ]);



  function addEvent() {
    setEvents((prevEvents) => [
      ...prevEvents,
      <EventCard
        image={newEvent.imageSrc}
        name={newEvent.name}
        date={newEvent.date}
        time={newEvent.time}
        location={newEvent.location}
      />
    ]);

    console.log(events);  // This might not log updated events immediately due to useState's asynchronous nature
  }

  return (
    <div className="home-container">
      {/* Header section */}
      <div className="header">
        <Header name="Sam" />
      </div>

      {/* Example top navigation (icons or text) */}
      <div className="top-nav">
        <div className="nav-item" onClick={addEvent}>
          <i className="fas fa-plus"></i>
          <span>Add Event</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-search"></i>
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
      </div>

      {/* Events list section */}
      <div className="events-list">
        {events}
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
