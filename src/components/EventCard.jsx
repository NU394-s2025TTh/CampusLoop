import './EventCard.css';

import React from 'react';


export function EventCard({ text }) {
  return (
    <div className="bio-card">
      <p>{text}</p>
    </div>
  );
}
