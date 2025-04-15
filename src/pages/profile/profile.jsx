import "./profile.css";
// eslint-disable-next-line no-unused-vars
import Form from "./form";
import Person from "./person";

import { useState } from "react";

export default function Profile({ addEvent }) {
  const [showForm, setShowForm] = useState(false);
  const [showPerson, setShowPerson] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const Profile = {
    imgSrc:
      "assets/blank-user.svg",
    name: "Person Doe",
    organization: "Buffett Institute",
  };

  function handleTabClick(tabName) {
    setActiveTab(tabName);
    if (tabName === "create-event") {
      setShowPerson(false);
      setShowForm(!showForm);
    } else if (tabName === "your-events") {
      setShowForm(false);
      setShowPerson(false);
      console.log("your events");
    } else if (tabName === "your-profile") {
      setShowPerson(!showPerson);
      setShowForm(false);
      console.log("your profile");
    }
  }

  return (
    <div>
      <div className="profile-info">
        <img src={Profile.imgSrc} alt="Profile Image" />
        <div className="text-info">
          <h2>{Profile.name}</h2>
          <p>{Profile.organization}</p>
        </div>
      </div>
      <div className="profile-tabs">
        <button
          className={activeTab === "create-event" ? "active-tab" : ""}
          onClick={() => handleTabClick("create-event")}
        >
          Create Event
        </button>
        <button
          className={activeTab === "your-events" ? "active-tab" : ""}
          onClick={() => handleTabClick("your-events")}
        >
          Your Events
        </button>
        <button
          className={activeTab === "your-profile" ? "active-tab" : ""}
          onClick={() => handleTabClick("your-profile")}
        >
          Your Profile
        </button>
      </div>
      {showForm && <Form addEvent={addEvent} />}
      {showPerson && <Person />}
    </div>
  );
}
