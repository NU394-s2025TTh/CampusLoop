import "./form.css";
import { db, storage } from "../../config/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function Form({ userID }) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const eventName = formData.get("eventName");
    const description = formData.get("description");
    const linkToTicket = formData.get("linkToTicket");
    const imageFile = formData.get("image");
    const imageFile = formData.get("image");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");
    const category = formData.get("category");

    const imageRef = ref(
      storage,
      `event_images/${Date.now()}_${imageFile.name}`,
    );
    const imageRef = ref(
      storage,
      `event_images/${Date.now()}_${imageFile.name}`,
    );

    try {
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);

      console.log(imageUrl);

      const newEvent = {
        EventName: eventName,
        Description: description,
        LinktoTickets: linkToTicket,
        LinktoImage: imageUrl,
        LinktoImage: imageUrl,
        Date: date,
        Time: time,
        Location: location,
        Category: category,
        Saved: false,
        UserID: userID,
        UserID: userID,
      };

      await addDoc(collection(db, "events"), newEvent);
      setShowSuccess(true);
      event.target.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  }

  return (
    <>
      {showSuccess && (
        <div className="success-popup">
          🎉 Your Event was posted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="form">
        <label>
          <span>
            Event Name: <span className="required">*</span>
          </span>
          <input type="text" name="eventName" required />
        </label>
        <label>
          <span>
            Description: <span className="required">*</span>
            <textarea name="description" required />
          </span>
        </label>

        <label>
          Link to Tickets:
          <input type="url" name="linkToTicket" />
        </label>

        <label>
          <span>
            Upload Image: <span className="required">*</span>
            <input type="file" name="image" accept="image/*" required />
          </span>
        </label>

        <label>
          <span>
            Date: <span className="required">*</span>
            <input type="date" name="date" required />
          </span>
        </label>

        <label>
          <span>
            Time: <span className="required">*</span>
            <input type="time" name="time" required />
          </span>
        </label>

        <label>
          <span>
            Location: <span className="required">*</span>
            <input type="text" name="location" required />
          </span>
        </label>

        <label>
          <span>
            Category: <span className="required">*</span>
            <select name="category" required>
              <option value="">Select Category</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Arts">Arts</option>
              <option value="Campus Life">Campus Life</option>
            </select>
          </span>
        </label>

        <button type="submit">Submit Event</button>
      </form>
    </>
  );
}
