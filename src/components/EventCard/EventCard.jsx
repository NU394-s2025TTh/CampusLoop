import "./EventCard.css";
import { useNavigate } from "react-router-dom";

export function EventCard({
  image,
  name,
  date,
  time,
  location,
  description,
  linkToTicket,
  onActionClick, // function for saving/removing
  actionIcon, // your React icon component (e.g., <CiBookmark />)
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/event-details", {
      state: { image, name, date, time, location, description, linkToTicket },
    });
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // Prevent navigating
    if (onActionClick) {
      onActionClick();
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

        {/* Date in top-left */}
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

        {/* Bookmark in top-right */}
        {onActionClick && (
          <button
            className="bookmark-button-overlay"
            onClick={handleBookmarkClick}
          >
            {actionIcon}
          </button>
        )}
      </div>

      <div className="event-card-content">
        <h1 className="event-name" title={name}>{name}</h1>
      </div>
    </div>
  );
}
