import React, { useState } from "react";
import "./RoleSelection.css";
import { Link } from "react-router";

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: "farmer-registration",
      title: "I am a Farmer",
      description:
        "Sell your tomatoes, connect with buyers, and book transport or cold storage when needed.",
      icon: "🚜",
    },
    {
      id: "buyer-registration",
      title: "I am a Buyer",
      description:
        "Buy fresh tomatoes directly from trusted farmers and arrange delivery with ease.",
      icon: "🛒",
    },
    {
      id: "storage-registration",
      title: "I am a Cold storage provider",
      description:
        "Offer safe storage for fresh tomatoes and receive booking requests from farmers and buyers.",
      icon: "🏢",
    },
    {
      id: "logistics-registration",
      title: "I am a Logistics Provider",
      description:
        "Accept delivery requests and transport tomatoes safely between farms, buyers, and storage facilities.",
      icon: "🚚",
    },
  ];

  return (
    <div className="role-page-container">
      <div className="role-modal-card">
        <h1 className="role-header-title">Welcome to TOMEX</h1>
        <p className="role-header-sub">
          Join TOMEX and connect with farmers, buyers, transport providers, and
          cold storage facilities. Select your role to get started.
        </p>

        {/* Adds 'has-selection' class when any card is clicked */}
        <div className={`role-grid ${selectedRole ? "has-selection" : ""}`}>
          {roles.map((role) => (
            <div
              key={role.id}
              className={`role-card ${
                selectedRole === role.id ? "selected" : "unselected"
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="role-icon">{role.icon}</div>
              <h3 className="role-card-title">{role.title}</h3>
              <p className="role-card-desc">{role.description}</p>
            </div>
          ))}
        </div>

        <Link to={"/" + selectedRole}>
          <div className="role-action-wrapper">
            <button className="role-continue-btn" disabled={!selectedRole}>
              Continue
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RoleSelection;
