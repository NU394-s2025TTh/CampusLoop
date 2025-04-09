import './EventCard.css';

import React from 'react';


export function EventCard({image, name, date, time, location}) {
  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-card-image" />
      <div className="event-card-content">
      <h1 className="name"> {name}</h1>
      <p className="datetime"> {date} | {time} </p>
      <p className="location"> {location}</p>
      </div>
    </div>
  );
}
