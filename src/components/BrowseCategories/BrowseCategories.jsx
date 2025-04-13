
import React from "react";
import { EventCard } from "../EventCard/EventCard";
import "./BrowseCategories.css";

function BrowseCategories({ categorizedEvents }) {
  return (
    <div className="browse-categories">
      {categorizedEvents.map((categoryBlock) => (
        <div key={categoryBlock.category} className="category-section">
          <h2 className="category-title">{categoryBlock.category}</h2>
          <div className="category-scroll">
            {categoryBlock.events.map((event) => (
              <EventCard
                key={event.key}
                image={event.image}
                name={event.name}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                linkToTicket={event.linkToTicket}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseCategories;

