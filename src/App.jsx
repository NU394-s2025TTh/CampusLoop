import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Explore from "./pages/explore/explore";
import Saved from "./pages/saved/saved"; // or adjust the path/capitalization if needed
import EventDetails from "./pages/eventDetails/eventDetails";
import { SavedEventsProvider } from "./context/SavedEventsContext";
import CreateEvent from "./pages/createEvent/createEvent";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import Login from "./Login";
import "./Login.css";

// Clerk publishable key
const PUBLISHABLE_KEY =
  "pk_test_Zmx1ZW50LXJlaW5kZWVyLTM3LmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <SavedEventsProvider>
      <BrowserRouter>
        {/* Shared layout wrapper */}
        <SignedOut>
          <Login />
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="saved" element={<Saved />} />
              <Route path="profile" element={<Profile />} />
              <Route path="event-details" element={<EventDetails />} />
            </Route>
          </Routes>
        </SignedIn>
      </BrowserRouter>
    </SavedEventsProvider>
  );
}

export default App;
