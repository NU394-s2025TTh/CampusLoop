import './profile.css';
import Form from "./form"
import React, {useState} from 'react'

export default function Profile({ addEvent }) {
  const [showForm, setShowForm] = useState(false);

  const Profile = {
    imgSrc: "https://drive.google.com/thumbnail?id=1KXZzQ-eODWRg4cPxqJCvz0plZxno9c-C",
    name: "Ziad Elbadry",
    organization: "Buffett Institute"
  }

  function toggleForm(){
    setShowForm(!showForm);
  }

  return (
    <div className="profile-page">

      <div className="profile-info">
        <img src={Profile.imgSrc} alt="Profile Image" />
        <div className="text-info">
          <h2>{Profile.name}</h2>
          <p>{Profile.organization}</p>
        </div>
        
      </div>
      <button onClick={toggleForm}>{showForm ? "Hide Form" : "Create Event"}</button>
      {showForm && <Form addEvent={addEvent} />}
    </div>
  );
}
