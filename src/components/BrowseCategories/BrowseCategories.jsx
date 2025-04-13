import React from "react";
import { EventCard } from "../EventCard/EventCard";
import "./BrowseCategories.css";

function BrowseCategories({ events }) {
  return (
    <div className="browse-categories">
      {events.map((event) => (
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
  );
}

export default BrowseCategories;
