// src/components/SearchBar/searchbar.jsx
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  useInstantSearch,
} from "react-instantsearch";
import "./searchbar.css";
import { EventCard } from "../EventCard/EventCard";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";

{
  /* Regular Algolia Client */
}
const algoliaClient = algoliasearch(
  "ZMCX8B53ID",
  "a9efa54725a3aada722387ede2634154",
);

{
  /* Proxy Client to prevent empty searches */
}
const searchClient = {
  ...algoliaClient,
  search(requests) {
    // Check if every request has an empty query
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: "",
          params: "",
        })),
      });
    }
    // Otherwise forward the search to Algolia
    return algoliaClient.search(requests);
  },
};

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

function SearchContent({ events }) {
  const { results, indexUiState } = useInstantSearch();
  const query = indexUiState.query || "";

  if (results.nbHits === 0) {
    return (
      <div className="search-hits">
        {/* Optional: show a "No results for..." message if the user actually typed something */}
        {query.trim() !== "" && (
          <p
            style={{
              marginBottom: "1rem",
              fontSize: "1rem",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            No results for <q>{query}</q>
          </p>
        )}
        <BrowseCategories events={events} />
      </div>
    );
  }

  return (
    <div className="search-hits">
      <Hits hitComponent={Hit} />
    </div>
  );
}

export default function SearchBar({ events }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="campusloop_events">
      <div className="search-section">
        <SearchBox
          placeholder="Search for an event…"
          //submitIconComponent={({ classNames }) => (
          //  <div className={classNames.submitIcon}></div>
          //)}
          submitIconComponent={() => null}
          resetIconComponent={() => null}
          autoFocus
          classNames={{
            submit: "hidden",
            reset: "hidden",
          }}
        />
      </div>

      <Configure hitsPerPage={20} />
      <SearchContent events={events} />
    </InstantSearch>
  );
}
