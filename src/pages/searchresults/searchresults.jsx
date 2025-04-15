import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { EventCard } from "../../components/EventCard/EventCard";
import "./SearchResults.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const queryParam = useQuery();
  const searchTerm = queryParam.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        let q;
        if (searchTerm.trim() === "") {
          q = query(
            collection(db, "events") /*, orderBy("createdAt", "desc")*/,
          );
        } else {
          q = query(
            collection(db, "events"),
            orderBy("name"),
            startAt(searchTerm),
            endAt(searchTerm + "\uf8ff"),
          );
        }

        const snapshot = await getDocs(q);
        const events = snapshot.docs.map((doc) => ({
          key: doc.id,
          ...doc.data(),
        }));
        setResults(events);
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div className="search-results-container">
      <div className="search-grid">
        {results.length > 0 ? (
          results.map((event) => (
            <EventCard
              key={event.key}
              image={event.imageSrc}
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              linkToTicket={event.linkToTicket}
            />
          ))
        ) : (
          <p style={{color: "white"}}>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
