
import React from 'react';
import { useState, useEffect } from 'react';
import { EventCard } from '../../components/EventCard/EventCard';
import { Header } from '../../components/Header/Header';
import { NavBar } from '../../components/NavBar/NavBar';
import img from '../../../assets/event.jpg';
import './home.css';

// Firestore imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxXspEqc5nDQOJ6sHvJIlExWI9245nsBQ",
  authDomain: "campusloop-42891.firebaseapp.com",
  projectId: "campusloop-42891",
  storageBucket: "campusloop-42891.firebasestorage.app",
  messagingSenderId: "520501738089",
  appId: "1:520501738089:web:40f5bf830249475c2600f8",
  measurementId: "G-ZWGVG0KXTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function Home() {
  // Local state to store EventCard components.
  const [events, setEvents] = useState([]);

  // State to control modal visibility.
  const [showModal, setShowModal] = useState(false);

  // Form state for new event fields.
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });

  // On component mount, load existing events from Firestore.
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRef = collection(db, 'events');
        const eventsQuery = query(eventsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(eventsQuery);
        const eventsArray = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return (
            <EventCard
              key={doc.id}
              image={data.imageSrc}
              name={data.name}
              date={data.date}
              time={data.time}
              location={data.location}
            />
          );
        });
        setEvents(eventsArray);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Open modal.
  const openModal = () => {
    setShowModal(true);
  };

  // Close modal and optionally reset the form.
  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      date: '',
      time: '',
      location: ''
    });
  };

  // Update form state when input changes.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // On form submission, add a new event to Firestore.
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      // imageSrc could be replaced with a URL from file upload or similar in the future.
      imageSrc: img,
      name: formData.name,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      createdAt: new Date() // timestamp for ordering events
    };

    try {
      const docRef = await addDoc(collection(db, 'events'), newEvent);
      console.log("Document written with ID: ", docRef.id);
      // Add the event to the local state. Use the Firebase document ID as the key.
      const newEventCard = (
        <EventCard
          key={docRef.id}
          image={newEvent.imageSrc}
          name={newEvent.name}
          date={newEvent.date}
          time={newEvent.time}
          location={newEvent.location}
        />
      );
      setEvents((prevEvents) => [newEventCard, ...prevEvents]);
      closeModal();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <Header name="Sam" />
      </div>

      {/* Top navigation with modal trigger */}
      <div className="top-nav">
        <div className="nav-item" onClick={openModal}>
          <i className="fas fa-plus"></i>
          <span>Add Event</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-search"></i>
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
      </div>

      {/* Modal pop-up for new event creation */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Event</h2>
              <button className="close-button" onClick={closeModal}>&times;</button>
            </div>
            <form onSubmit={handleFormSubmit} className="event-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Event Name"
                required
              />
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Event Date (e.g., Mar 25)"
                required
              />
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Event Time (e.g., 7:00pm)"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Event Location"
                required
              />
              <button type="submit">Submit Event</button>
            </form>
          </div>
        </div>
      )}

      {/* Display events */}
      <div className="events-list">
        {events}
      </div>
      
      <NavBar />
    </div>
  );
}

export default Home;
