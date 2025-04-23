import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firestore";
import "./YourEvents.css";

export default function YourEvents({ userID }) {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    EventName: "",
    Description: "",
    Date: "",
    Time: "",
    Location: "",
  });

  useEffect(() => {
    async function fetchEvents() {
      const q = query(collection(db, "events"), where("UserID", "==", userID));
      const querySnapshot = await getDocs(q);
      const userEvents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(userEvents);
    }
    if (userID) fetchEvents();
  }, [userID]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "events", id));
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const startEdit = (event) => {
    setEditingId(event.id);
    setFormData({
      EventName: event.EventName,
      Description: event.Description,
      Date: event.Date,
      Time: event.Time,
      Location: event.Location,
    });
  };

  const handleUpdate = async (id) => {
    await updateDoc(doc(db, "events", id), {
      EventName: formData.EventName,
      Description: formData.Description,
      Date: formData.Date,
      Time: formData.Time,
      Location: formData.Location,
    });
    setEditingId(null);
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, ...formData } : event,
      ),
    );
  };

  return (
    <div className="your-events-list">
      {events.length === 0 ? (
        <p>No Events</p>
      ) : (
        events.map((event) => (
          <div className="your-event-card" key={event.id}>
            <img src={event.LinktoImage} alt={event.EventName} />
            {editingId === event.id ? (
              <>
                <input
                  value={formData.EventName}
                  onChange={(e) =>
                    setFormData({ ...formData, EventName: e.target.value })
                  }
                  placeholder="Event Name"
                />
                <textarea
                  value={formData.Description}
                  onChange={(e) =>
                    setFormData({ ...formData, Description: e.target.value })
                  }
                  placeholder="Description"
                />
                <input
                  type="date"
                  value={formData.Date}
                  onChange={(e) =>
                    setFormData({ ...formData, Date: e.target.value })
                  }
                />
                <input
                  type="time"
                  value={formData.Time}
                  onChange={(e) =>
                    setFormData({ ...formData, Time: e.target.value })
                  }
                />
                <input
                  value={formData.Location}
                  onChange={(e) =>
                    setFormData({ ...formData, Location: e.target.value })
                  }
                  placeholder="Location"
                />
                <div className="btn">
                  <button onClick={() => handleUpdate(event.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3>{event.EventName}</h3>
                <p>{event.Description}</p>
                <p>
                  {event.Date} at {event.Time}
                </p>
                <p>Location: {event.Location}</p>
                <div className="btn">
                  <button
                    className="delete"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => startEdit(event)}>Edit</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
