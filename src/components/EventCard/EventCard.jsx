import './EventCard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function EventCard({ image, name, date, time, location, description, linkToTicket }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/event-details', {
      state: { image, name, date, time, location, description, linkToTicket }
    });
  };


  return (
    <div className="event-card" onClick={handleClick}>
      <img src={image} alt={name} className="event-card-image" />
      <div className="event-card-content">
      <h1 className="name"> {name}</h1>
      <p className="datetime"> {date} | {time} </p>
      <p className="location"> {location}</p>
      <p>{description}</p>
      <a href={linkToTicket}>Link to Ticket</a>
      </div>
    </div>
  );
}
