// SavedEventsContext.jsx
import { createContext, useContext, useState } from "react";

const SavedEventsContext = createContext();

export function SavedEventsProvider({ children }) {
  const [savedEvents, setSavedEvents] = useState([]);

  // Use functional update to ensure you're using the latest state
  const addSavedEvent = (event) => {
    setSavedEvents((prevEvents) => {
      // Only add if the event isn't already saved (by checking unique id)
      if (!prevEvents.find((e) => e.id === event.id)) {
        return [...prevEvents, event];
      }
      return prevEvents;
    });
  };

  const removeSavedEvent = (eventId) => {
    setSavedEvents((prevEvents) => prevEvents.filter((e) => e.id !== eventId));
  };

  return (
    <SavedEventsContext.Provider
      value={{ savedEvents, addSavedEvent, removeSavedEvent }}
    >
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  return useContext(SavedEventsContext);
}
