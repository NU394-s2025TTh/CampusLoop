import "./form.css";
import { db } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    const formData = new FormData(event.target);

    // Extract form values
    const eventName = formData.get("eventName");
    const description = formData.get("description");
    const linkToTicket = formData.get("linkToTicket");
    const imageUrl = formData.get("image");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");

    // Build the new event object with the download URL and form data
    const newEvent = {
      imageSrc: imageUrl,
      name: eventName,
      description: description,
      linkToTicket: linkToTicket,
      date: date,
      time: time,
      location: location,
      createdAt: new Date(), // Store the timestamp for ordering
    };

    try {
      // Save the event to Firestore
      await addDoc(collection(db, "events"), newEvent);
      console.log("Event added to Firestore");
      // Reset the form upon success
      event.target.reset();
    } catch (error) {
      console.error("Error adding event:", error);
    }

    console.alert("Your Event Created Succesfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="eventName" placeholder="Event Name" required />
      <textarea name="description" placeholder="Description" required />
      <input type="url" name="linkToTicket" placeholder="Link to Tickets" />
      <input type="url" name="image" placeholder="Link to Image" required />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <input type="text" name="location" placeholder="Location" required />
      <button type="submit">Submit Event</button>
    </form>
  );
}
