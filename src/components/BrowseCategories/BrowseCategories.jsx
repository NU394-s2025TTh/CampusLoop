// src/components/BrowseCategories/BrowseCategories.jsx
import React from "react";
import { EventCard } from "../EventCard/EventCard";
import "./BrowseCategories.css";
import { CiBookmark } from "react-icons/ci";
import { useSavedEvents } from "../../context/SavedEventsContext";
import categories from "./categories.json";

function BrowseCategories({ events }) {
  const { addSavedEvent } = useSavedEvents();

  return (
    <div className="browse-categories">
      {categories.map((category) => {
        const eventsForCat = events.filter((e) => e.Category === category);
        if (eventsForCat.length === 0) return null;

        return (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="category-scroll">
              {eventsForCat.map((event) => (
                <EventCard
                  key={event.id}
                  image={event.LinktoImage}
                  name={event.EventName}
                  date={event.Date}
                  time={event.Time}
                  location={event.Location}
                  description={event.Description}
                  linkToTicket={event.LinktoTicket}
                  onActionClick={() => addSavedEvent(event)}
                  actionIcon={<CiBookmark />}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BrowseCategories;
