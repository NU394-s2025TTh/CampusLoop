import React, { useState, useEffect } from "react";
import { EventCard } from "../../components/EventCard/EventCard";
import "./saved.css"; // Optional if you want custom styling
import { CiBookmarkRemove } from "react-icons/ci";
import { fetchEvents } from "../../context/api";

export default function Saved() {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const all = await fetchEvents();
      setSavedEvents(all.filter((e) => e.Saved));
    })();
  }, []);

  const handleRemove = (id) => {
    // If you persist removals to your backend, do it here.
    // Then update local state:
    setSavedEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved Events!</h2>
      <div className="saved-grid">
        {savedEvents.length === 0 ? (
          <p style={{ color: "white" }}>No saved events.</p>
        ) : (
          savedEvents.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              linkToTicket={event.linkToTicket}
              onActionClick={() => handleRemove(event.id)}
              actionIcon={<CiBookmarkRemove />}
            />
          ))
        )}
      </div>
    </div>
  );
}
