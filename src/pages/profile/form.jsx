import React from 'react';
import './form.css';
import { db, storage } from '../../firebase'; // Make sure these are correctly exported from your firebase.js
import { collection, addDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Form() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Extract form values
    const eventName = formData.get("eventName");
    const description = formData.get("description");
    const linkToTicket = formData.get("linkToTicket");
    const imageFile = formData.get("image");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");
    
    // Create a unique identifier for storage; consider using a library like uuid in production
    const eventId = eventName + Date.now();  

    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      try {
        // Create a reference in your Firebase Storage under 'events/{eventId}'
        const imageStorageRef = storageRef(storage, `events/${eventId}`);
        // Upload the image file to Firebase Storage
        const snapshot = await uploadBytes(imageStorageRef, imageFile);
        // Get the public download URL for the uploaded image
        imageUrl = await getDownloadURL(snapshot.ref);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    // Build the new event object with the download URL and form data
    const newEvent = {
      imageSrc: imageUrl,
      name: eventName,
      description: description,
      linkToTicket: linkToTicket,
      date: date,
      time: time,
      location: location,
      createdAt: new Date()  // Store the timestamp for ordering
    };

    try {
      // Save the event to Firestore
      await addDoc(collection(db, 'events'), newEvent);
      console.log("Event added to Firestore");
      // Reset the form upon success
      event.target.reset();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="eventName" placeholder="Event Name" required />
      <textarea name="description" placeholder="Description" required />
      <input type="url" name="linkToTicket" placeholder="Link to Tickets"  />
      <input type="file" name="image" />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <input type="text" name="location" placeholder="Location" required />
      <button type="submit">Submit Event</button>
    </form>
  );
}
