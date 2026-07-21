import React from "react";
import { Link } from "react-router";
import "./Success.css";

function Success() {
  return (
    <main className="success-page">
      <div className="success-container">
        <h1 className="success-title">Verification Submitted</h1>

        <div className="success-message">
          <p>Your KYC have been received.</p>
          <p>Your account is under review.</p>
          <p>
            You will be notified once your
            <br />
            verification is complete.
          </p>
        </div>

        <Link to="/" className="home-btn">
          <span className="arrow-circle">➔</span>
          <span>Go to Dashboard</span>
        </Link>
      </div>
    </main>
  );
}

export default Success;
