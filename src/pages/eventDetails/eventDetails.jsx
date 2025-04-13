import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetails.css"; // optional if you want styling

function EventDetails() {
  const { state } = useLocation();

  if (!state) {
    return <p>No event data found.</p>;
  }

  const { image, name, date, time, location, description, linkToTicket } =
    state;

  return (
    <div className="event-details-container">
      <img src={image} alt={name} className="event-details-image" />
      <h1 className="event-details-title">{name}</h1>
      <p className="event-details-datetime">
        {date} | {time}
      </p>
      <p className="event-details-location">{location}</p>
      <p className="event-details-description">{description}</p>
      {linkToTicket && (
        <a
          href={linkToTicket}
          target="_blank"
          rel="noopener noreferrer"
          className="event-details-ticket-link"
        >
          Get Tickets
        </a>
      )}
    </div>
  );
}

export default EventDetails;
