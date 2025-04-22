import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import "./Login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <h1 className="login-welcome">Welcome to CampusLoop</h1>
        <p>
          Discover, share &amp; save every campus event—effortlessly staying in
          the loop with everything happening on campus.
        </p>
        <div className="login-button">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default Login;
