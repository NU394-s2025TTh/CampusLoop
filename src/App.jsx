import './App.css';

import React from 'react';

import { EventCard } from './components/EventCard';

function App() {
  return (

    <div classame="App">
      <div className="App-header">
        <EventCard 
          text = "hello" 
        />
      </div>
      
    </div>
  );
}

export default App;
