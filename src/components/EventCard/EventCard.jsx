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

  return (
    <div className="event-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="event-card-image" />

      <div className="event-card-content">
        {/* Show the name on a full line */}
        <h1 className="event-name">{name}</h1>

        {/* Footer row for date on left, bookmark icon on right */}
        <div className="event-card-footer">
          <p className="event-date">{date}</p>
          {onActionClick && (
            <button className="bookmark-button" onClick={handleBookmarkClick}>
              {actionIcon}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
