import "./EventCard.css";
import { useNavigate } from "react-router-dom";
import { useSavedEvents } from "../../context/SavedEventsContext";
import { CiBookmark, CiBookmarkRemove } from "react-icons/ci";

export function EventCard({
  id,
  image,
  name,
  date,
  time,
  location,
  description,
  linkToTicket,
}) {
  const navigate = useNavigate();
  const { savedEvents, addSavedEvent, removeSavedEvent } = useSavedEvents();

  // determine saved state
  const isSaved = savedEvents.some((e) => e.id === id);

  const handleCardClick = () => {
    navigate("/event-details", {
      state: { image, name, date, time, location, description, linkToTicket },
    });
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (isSaved) {
      removeSavedEvent(id);
    } else {
      addSavedEvent({
        id,
        image,
        name,
        date,
        time,
        location,
        description,
        linkToTicket,
      });
    }
  };

  const monthDict = {
    "01": "JAN",
    "02": "FEB",
    "03": "MAR",
    "04": "APR",
    "05": "MAY",
    "06": "JUN",
    "07": "JUL",
    "08": "AUG",
    "09": "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
  };

  return (
    <div className="event-card" onClick={handleCardClick}>
      <div className="event-card-image-wrapper">
        <img src={image} alt={name} className="event-card-image" />

        <div className="event-date-overlay">
          <div className="event-date-text">
            <div style={{ fontSize: "1.1rem", lineHeight: 1 }}>
              {date.substring(8, 10)}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              {monthDict[date.substring(5, 7)]}
            </div>
          </div>
        </div>

        <button
          className="bookmark-button-overlay"
          onClick={handleBookmarkClick}
        >
          {isSaved ? <CiBookmarkRemove /> : <CiBookmark />}
        </button>
      </div>

      <div className="event-card-content">
        <h1 className="event-name" title={name}>
          {name}
        </h1>
      </div>
    </div>
  );
}
