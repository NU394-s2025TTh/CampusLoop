import './App.css';
import React from 'react';
import { EventCard } from './components/EventCard';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <EventCard
          image="https://th.bing.com/th/id/R.0ef3f46e721fc38992d27ae094d8839d?rik=pkkoLMJ1sYH5%2bQ&riu=http%3a%2f%2fcdn.ebaumsworld.com%2fmediaFiles%2fpicture%2f1035099%2f85708057.jpg&ehk=0s2rVcOCi7BxjLnx3xC6W7QoS3gzbFcqqunGh21%2boZw%3d&risl=&pid=ImgRaw&r=0"
          name="First Card"
          date="sunday 06 2025"
          time="3pm"
          location="spac"
        />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
