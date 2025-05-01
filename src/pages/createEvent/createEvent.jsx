// src/pages/create-event/createEvent.jsx
import React, { useState } from "react";
import "./createEvent.css";
import { db, storage } from "../../config/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import categories from "../../components/BrowseCategories/categories.json";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const { user } = useUser();
  const userID = user?.id;
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    
    e.preventDefault();
    const formData = new FormData(e.target);

    const newEvent = {
      EventName: formData.get("eventName"),
      Description: formData.get("description"),
      LinktoTickets: formData.get("linkToTicket") || "",
      Date: formData.get("date"),
      Time: formData.get("time"),
      Location: formData.get("location"),
      Category: formData.get("category"),
      Saved: false,
      UserID: userID,
    };

    const imageFile = formData.get("image");
    if (imageFile && imageFile.name) {
      const imageRef = ref(storage, `event_images/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      newEvent.LinktoImage = await getDownloadURL(imageRef);
    }

    try {
      await addDoc(collection(db, "events"), newEvent);
      setShowSuccess(true);
      e.target.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Error adding event:", err);
    }

  }

  return (
    <div className="create-event-container">
      {showSuccess && (
        <div className="success-popup">
          🎉 Your event has been created!
        </div>
      )}
      <form className="create-event-form" onSubmit={handleSubmit}>
        <h2>Post a New Event</h2>

        <label>
          Event Name <span className="required">*</span>
          <input type="text" name="eventName" required />
        </label>

        <label>
          Description <span className="required">*</span>
          <textarea name="description" required />
        </label>

        <label>
          Link to Tickets
          <input type="url" name="linkToTicket" />
        </label>

        <label>
          Upload Image <span className="required">*</span>
          <input type="file" name="image" accept="image/*" required />
        </label>

        <label>
          Date <span className="required">*</span>
          <input type="date" name="date" required />
        </label>

        <label>
          Time <span className="required">*</span>
          <input type="time" name="time" required />
        </label>

        <label>
          Location <span className="required">*</span>
          <input type="text" name="location" required />
        </label>

        <label>
          Category <span className="required">*</span>
          <select name="category" required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
}
