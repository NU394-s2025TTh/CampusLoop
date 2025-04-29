import React, { useState, useEffect } from "react";
import "./explore.css";
import { useSavedEvents } from "../../context/SavedEventsContext";
import SearchBar from "../../components/searchbar/searchbar";
import { fetchEvents } from "../../context/api";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import { useNavigate } from "react-router-dom";


function Explore() {
  // const { addSavedEvent } = useSavedEvents();
  const navigate = useNavigate();

  const handleFeaturedClick = () => {
    navigate("/event-details", {
      state: {
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F973891293%2F153732665119%2F1%2Foriginal.20250303-174916?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=46298fb28449f0e9a23ed87c2f03178c",
        name: "VentureCat Showcase",
        date: "2-2-2024",
        time: "5:00 PM ",
        location: "Tech Aud",
        description: "Come see our startups pitch their ideas!",
        linkToTicket: "",
      },
    });
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const eventsArray = await fetchEvents();
      if (eventsArray) {
        setEvents(eventsArray);
      }
    })();
  }, []);

  return (
    <div className="explore-container">
      {/* Hero Banner */}
      <div className="explore-hero" onClick={handleFeaturedClick}>
        <div className="explore-hero-content">
          <h2 className="explore-hero-title">Featured Event</h2>
        </div>
      </div>

      <h2 className="explore-title">Explore!</h2>

      <SearchBar events={events} />
      {/*<BrowseCategories events={events} />*/}

    </div>
  );
}

export default Explore;
