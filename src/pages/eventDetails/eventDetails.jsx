// src/pages/eventDetails/eventDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSavedEvents } from "../../context/SavedEventsContext";
import { CiBookmark, CiBookmarkRemove } from "react-icons/ci";
import "./EventDetails.css";

export default function EventDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { savedEvents, addSavedEvent, removeSavedEvent } = useSavedEvents();

  if (!state) {
    return <p>No event data found.</p>;
  }

  const {
    id,
    image,
    name,
    date,
    time,
    location,
    description,
    linkToTicket,
  } = state;

  // Check if this event is already saved
  const isSaved = savedEvents.some((e) => e.id === id);

  const handleSaveToggle = () => {
    if (isSaved) {
      removeSavedEvent(id);
    } else {
      // add the full event object
      addSavedEvent({ id, image, name, date, time, location, description, linkToTicket });
    }
  };

  return (
    <div className="event-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      {/* Save/Unsave button */}
      <button
        onClick={handleSaveToggle}
        className={`save-button ${isSaved ? "saved" : ""}`}
      >
        {isSaved ? <CiBookmarkRemove /> : <CiBookmark />}{" "}
        {isSaved ? "Unsave" : "Save"}
      </button>

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
