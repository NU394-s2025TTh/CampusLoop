import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

const fetchEvents = async () => {
  const events = [];
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    events.push({ id: doc.id, ...doc.data() });
    // console.log(events);
  });
  return events;
};

export { fetchEvents };
