// Login.jsx
import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import "./Login.css";
import "./Layouts/Layout.css";   // bring in your app‑wrapper, inner‑container, etc.

function Login() {
  return (
    <div className="app-wrapper">
      <div className="inner-container">
        <div className="scrollable-content">
          <div className="login-wrapper">
            <div className="login-content">
              <h1 className="login-welcome">Welcome to CampusLoop</h1>
              <p>
                Discover, share &amp; save every campus event
              </p>
              <div className="login-button">
                <SignInButton>
                  <button>Sign In</button>
                </SignInButton>
              </div>
            </div>
          </div>
        </div>
        {/* no NavBar here so login stays clean */}
      </div>
    </div>
  );
}

export default Login;
