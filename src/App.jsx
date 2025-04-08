import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { EventCard } from './components/EventCard/EventCard';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import img from '../assets/event.jpg';


function App() {

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
    <div className="App">
      <Header name="Sam"/>
      <div className="App-header">
        {events}
      </div>
      <NavBar />
    </div>
  );
}

export default App;
