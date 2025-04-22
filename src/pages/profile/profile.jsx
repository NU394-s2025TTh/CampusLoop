// Profile.jsx
import "./profile.css";
import { useState } from "react";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";

import Form from "./form";

export default function Profile({ addEvent }) {
  const { user } = useUser();
  const userID = user?.id;
  const displayName = user?.firstName || user?.fullName || "there";

  const [showForm, setShowForm] = useState(false);
  const [showPerson, setShowPerson] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const userButtonAppearance = {
    elements: {
      // This box wraps the avatar—you can give it any CSS class or Tailwind utilities
      userButtonAvatarBox: "profile-avatar-box",
      // If you want to customize the dropdown card or buttons you can add those too:
      // userButtonPopoverCard: "my-popover-card-class",
      // userButtonPopoverActionButton: "my-action-button-class",
    },
  };

  function handleTabClick(tabName) {
    setActiveTab(tabName);
    if (tabName === "create-event") {
      setShowPerson(false);
      setShowForm((f) => !f);
    } else if (tabName === "your-profile") {
      setShowPerson((p) => !p);
      setShowForm(false);
    }
  }

  return (
    <div className="profile-container">
      {/* ★ Top‑left user badge + name */}
      <SignedIn>
        <div className="profile-header">
          <UserButton appearance={userButtonAppearance} />
          <span className="profile-username">
            Look at your past events & create more
          </span>
        </div>
      </SignedIn>

      {/* ★ Tabs */}
      <div className="profile-tabs">
        <button
          className={activeTab === "create-event" ? "active-tab" : ""}
          onClick={() => handleTabClick("create-event")}
        >
          Create Event
        </button>
      </div>

      {showForm && <Form addEvent={addEvent} userID={userID}/>}
      {showPerson && <Person />}
    </div>
  );
}
