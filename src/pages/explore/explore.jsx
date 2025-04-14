import React from "react";
import { EventCard } from "../../components/EventCard/EventCard";
import img from "../../../assets/event.jpg";
import img2 from "../../../assets/image5.jpg";
import img3 from "../../../assets/image6.jpg";
import img4 from "../../../assets/image7.jpg";
import "./explore.css"; // Optional if you want custom styling
import { useSavedEvents } from "../../context/SavedEventsContext";
import { CiBookmark } from "react-icons/ci";

function Explore() {
  const { addSavedEvent } = useSavedEvents();

  const events = [
    {
      id: 0,
      image: img,
      name: "NU Men's Basketball vs. Iowa",
      date: "Mar 20",
      time: "8:00pm",
      location: "Welsh Ryan Arena",
      description:
        "Join us at Welsh-Ryan Arena to support the Wildcats as they take on Big Ten rival Iowa in a high-stakes showdown!",
      linkToTicket: "https://www.nusports.com/tickets",
    },
    {
      id: 1,
      image: img2,
      name: "NU Men's Basketball vs. Iowa",
      date: "Mar 20",
      time: "8:00pm",
      location: "Welsh Ryan Arena",
      description:
        "Don’t miss the action as NU battles Iowa on home turf. Wear your purple and bring the Wildcat spirit!",
      linkToTicket: "https://www.nusports.com/tickets",
    },
    {
      id: 2,
      image: img3,
      name: "Spring A Cappella Showcase",
      date: "Mar 25",
      time: "7:30pm",
      location: "Pick-Staiger Concert Hall",
      description:
        "Enjoy a night of stunning vocals and harmonies as Northwestern’s top a cappella groups perform their spring sets.",
      linkToTicket: "https://www.nusports.com/tickets",
    },
    {
      id: 3,
      image: img4,
      name: "Jazz Night @ Norris",
      date: "Mar 27",
      time: "9:00pm",
      location: "Norris Center",
      description:
        "Unwind with smooth tunes, snacks, and good vibes at Jazz Night. Featuring student musicians in an intimate lounge setting.",
      linkToTicket: "https://www.nusports.com/tickets",
    },
  ];

  return (
    <div className="events-list">
      <h2 className="explore-title">Explore!</h2>
      <div className="explore-container">
        {/* Search and Filter Section */}
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search for an event..."
          />
          <div className="filter-bar">
            <button className="filter-chip">Date</button>
            <button className="filter-chip">Category</button>
            <button className="filter-chip">More Filters</button>
          </div>
        </div>

        {events.map((event) => (
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
            actionIcon={<CiBookmark />}
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;
