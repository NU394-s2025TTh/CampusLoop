import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firestore";

const SavedEventsContext = createContext();

export function SavedEventsProvider({ children }) {
  const { user } = useUser();
  const uid = user?.id;
  const [savedEvents, setSavedEvents] = useState([]);

  // Real-time listener for the user's savedEvents subcollection
  useEffect(() => {
    // console.log("✔ current user ID:", uid);
    if (!uid) return;
    const colRef = collection(db, "users", uid, "savedEvents");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSavedEvents(events);
    });
    return unsubscribe;
  }, [uid]);

  const addSavedEvent = async (event) => {
    if (!uid) throw new Error("Not signed in");
    const eventRef = doc(db, "users", uid, "savedEvents", event.id);
    await setDoc(eventRef, {
      name: event.name,
      image: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      linkToTicket: event.linkToTicket ?? "",
    });
  };

  const removeSavedEvent = async (eventId) => {
    if (!uid) throw new Error("Not signed in");
    const eventRef = doc(db, "users", uid, "savedEvents", eventId);
    await deleteDoc(eventRef);
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
