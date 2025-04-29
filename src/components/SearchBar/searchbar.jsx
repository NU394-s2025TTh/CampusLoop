// src/components/SearchBar/searchbar.jsx
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch";
import "./searchbar.css";
import { EventCard } from "../EventCard/EventCard";

const searchClient = algoliasearch(
  "ZMCX8B53ID",
  "a9efa54725a3aada722387ede2634154",
);

function Hit({ hit }) {
  return (
    <EventCard
      image={hit.LinktoImage}
      name={hit.EventName}
      date={hit.Date}
      time={hit.Time}
      location={hit.Location}
      description={hit.Description}
      linkToTicket={hit.LinktoTicket}
      /* no save action here—pass one if you like */
    />
  );
}

export default function SearchBar() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="campusloop_events"
      // className="search-input"
    >
      <div className="search-section">
        <SearchBox
          // className="search-input"
          placeholder="Search for an event…"
          submitIconComponent={({ classNames }) => (
            <div className={classNames.submitIcon}></div>
          )}
          autoFocus
        />
      </div>
      <Configure hitsPerPage={20} />
      <div className="search-hits">
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}
