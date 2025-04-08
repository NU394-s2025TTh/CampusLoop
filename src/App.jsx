import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { EventCard } from './components/EventCard/EventCard';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import img from '../assets/event.jpg';
import Home from "./pages/home/home"
// import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
