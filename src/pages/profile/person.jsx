import { useState } from "react";
import "./person.css";

export default function Person() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ziad Elbadry",
    organization: "Buffett Institute",
    email: "ziad@example.com",
    phone: "123-456-7890",
    imgSrc:
      "https://drive.google.com/thumbnail?id=1KXZzQ-eODWRg4cPxqJCvz0plZxno9c-C",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, imgSrc: imageUrl }));
    }
  }

  return (
    <div className="person-card">
      <h1>Your Profile</h1>
      <div className="person-info">
        <div className="image-wrapper">
          <img src={profile.imgSrc} alt="Profile" />
          {editing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-input"
            />
          )}
        </div>
        <div className="person-details">
          {editing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="organization"
                value={profile.organization}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <h2>Name: {profile.name}</h2>
              <p>Organization: {profile.organization}</p>
              <p>Email: {profile.email}</p>
              <p>Phone Number: {profile.phone}</p>
            </>
          )}
        </div>
      </div>
      <button onClick={() => setEditing((prev) => !prev)}>
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
