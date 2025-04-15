import React from "react";
import { EventCard } from "../../components/EventCard/EventCard";
import "./saved.css"; // Optional if you want custom styling
import { useSavedEvents } from "../../context/SavedEventsContext";
import { CiBookmarkRemove } from "react-icons/ci";

function Saved() {
  const { savedEvents, removeSavedEvent } = useSavedEvents();

  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved Events!</h2>
      <div className="saved-grid">
        {savedEvents.length === 0 ? (
          <p style={{color: "white"}}>No saved events.</p>
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
              onActionClick={() => removeSavedEvent(event.id)}
              actionIcon={<CiBookmarkRemove />}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Saved;
