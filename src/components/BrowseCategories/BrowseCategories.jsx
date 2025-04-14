import React from "react";
import { EventCard } from "../EventCard/EventCard";
import "./BrowseCategories.css";
import { CiBookmark } from "react-icons/ci";
import { useSavedEvents } from "../../context/SavedEventsContext";

function BrowseCategories({ categorizedEvents }) {
  const { addSavedEvent } = useSavedEvents();

  return (
    <div className="browse-categories">
      {categorizedEvents.map((categoryBlock) => (
        <div key={categoryBlock.category} className="category-section">
          <h2 className="category-title">{categoryBlock.category}</h2>
          <div className="category-scroll">
            {categoryBlock.events.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                linkToTicket={event.linkToTicket}
                onActionClick={() => addSavedEvent(event)}
                actionIcon={<CiBookmark />} // The bookmark icon
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseCategories;
