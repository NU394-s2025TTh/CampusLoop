// src/pages/saved/Saved.jsx
import React from "react";
import { EventCard } from "../../components/EventCard/EventCard";
import { CiBookmarkRemove } from "react-icons/ci";
import { useSavedEvents } from "../../context/SavedEventsContext";
import "./saved.css";

export default function Saved() {
  const { savedEvents, removeSavedEvent } = useSavedEvents();

  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved Events</h2>
      <div className="saved-grid">
        {savedEvents.length === 0 ? (
          <p className="no-saved">You haven’t saved any events yet.</p>
        ) : (
          savedEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              image={event.image}
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              linkToTicket={event.linkToTicket}
              onActionClick={() => removeSavedEvent(event.id)}
              actionIcon={<CiBookmarkRemove />}
            />
          ))
        )}
      </div>
    </div>
  );
}
