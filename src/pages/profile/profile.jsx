import "./profile.css";
// eslint-disable-next-line no-unused-vars
import Form from "./form";
import { useState } from "react";

export default function Profile({ addEvent }) {
  const [showForm, setShowForm] = useState(false);

  const Profile = {
    imgSrc:
      "https://drive.google.com/thumbnail?id=1KXZzQ-eODWRg4cPxqJCvz0plZxno9c-C",
    name: "Ziad Elbadry",
    organization: "Buffett Institute",
  };

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div >
      <div className="profile-info">
        <img src={Profile.imgSrc} alt="Profile Image" />
        <div className="text-info">
          <h2>{Profile.name}</h2>
          <p>{Profile.organization}</p>
        </div>
      </div>
      <div className="profile-tabs">
        <button onClick={toggleForm}>
          Edit profile
        </button>
        <button onClick={toggleForm}>
          Create Events
        </button>
        <button onClick={toggleForm}>
          Your Events
        </button>
        
      </div>
      {showForm && <Form addEvent={addEvent} />}
    </div>
  );
}
