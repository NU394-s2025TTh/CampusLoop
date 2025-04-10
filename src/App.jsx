import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Explore from './pages/explore/explore';
import Saved from './pages/saved/saved'; // or adjust the path/capitalization if needed
import EventDetails from './pages/eventDetails/eventDetails';


// import './App.css';


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
    <Router>
      <Routes>
        {/* Shared layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="saved" element={<Saved />} />
          <Route path="profile" element={<Profile />} />
          <Route path="event-details" element={<EventDetails />} />
        </Route>
      </Routes>
    </Router>
    
  );
}


export default App;
