import "./form.css";
import { db, storage } from "../../config/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import categories from "../../components/BrowseCategories/categories.json";

export default function Form({ userID }) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const eventName = formData.get("eventName");
    const description = formData.get("description");
    const linkToTicket = formData.get("linkToTicket");
    const imageFile = formData.get("image");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");
    const category = formData.get("category");

    const imageRef = ref(
      storage,
      `event_images/${Date.now()}_${imageFile.name}`,
    );

    try {
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);

      const newEvent = {
        EventName: eventName,
        Description: description,
        LinktoTickets: linkToTicket,
        LinktoImage: imageUrl,
        Date: date,
        Time: time,
        Location: location,
        Category: category,
        Saved: false,
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
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="eventName" placeholder="Event Name" required />
        <textarea name="description" placeholder="Description" required />
        <input type="url" name="linkToTicket" placeholder="Link to Tickets" />
        <input type="file" name="image" required />
        <input type="date" name="date" required />
        <input type="time" name="time" required />
        <input type="text" name="location" placeholder="Location" required />
        <select name="category" required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Submit Event</button>
      </form>
      {showSuccess && (
        <div className="success-popup">
          🎉 Your Event was posted successfully!
        </div>
      )}
    </>
  );
}
