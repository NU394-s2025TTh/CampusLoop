import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export async function fetchEvents() {
    try {
      const eventsRef = collection(db, "events");
      const eventsQuery = query(eventsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(eventsQuery);
      const eventsArray = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          linkToTicket: data.linkToTicket,
          description: data.description,
          image: data.imageSrc,
          name: data.name,
          date: data.date,
          time: data.time,
          location: data.location,
        };
      });
      return eventsArray
    } catch (error) {
      console.error("Error loading events:", error);
    }
  }

