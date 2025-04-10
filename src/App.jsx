import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
