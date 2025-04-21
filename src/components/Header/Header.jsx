import { FaRegCalendar } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { UserButton, useUser, SignedIn } from "@clerk/clerk-react";
import React from "react";
import "./Header.css";

export function Header() {
  const { user } = useUser(); // clerk hook
  const displayName = user?.firstName || user?.fullName || "there";

  return (
    <header className="header">
      <h1 className="header-title">Stay in the Loop, {displayName}</h1>
      {/* Clerk’s user menu button */}
      <SignedIn>
        <div className="header-user">
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}
