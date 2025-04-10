<<<<<<< Updated upstream
import './App.css';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { EventCard } from './components/EventCard/EventCard';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import img from '../assets/event.jpg';
import Layout from './layouts/Layout';
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Explore from './pages/explore/explore';
import Saved from './pages/saved/saved'; // or adjust the path/capitalization if needed
import EventDetails from './pages/eventDetails/eventDetails';
// import './App.css';
>>>>>>> Stashed changes

import React from 'react';

import { EventCard } from './components/EventCard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Routes>
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
<<<<<<< Updated upstream

    <div classame="App">
      <div className="App-header">
        <EventCard 
          text = "hello" 
        />
      </div>
      
    </div>
=======
    <Router>
      <Routes>
        {/* Shared layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="saved" element={<Saved />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/event-details" element={<EventDetails />} />

        </Route>
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
}


export default App;
