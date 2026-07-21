import React, { useState } from "react";
import "./FarmerVerification.css";
import { Link } from "react-router";

function FarmerVerification() {
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [declaration, setDeclaration] = useState(false);
  const [selfie, setSelfie] = useState(null);

  const idOptions = [
    "National Identification Number (NIN)",
    "Voter's Card",
    "Driver's License",
  ];

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelfie(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Data Submitted:", {
      idType,
      idNumber,
      declaration,
      selfie,
    });
  };

  return (
    <div className="farmer-verify-wrapper">
      <div className="farmer-verify-container">
        {/* Header Section */}
        <header className="farmer-verify-header">
          <h1>Verify Your Farmer Account</h1>
          <p>
            Complete your verification to start selling tomatoes,
            <br />
            book storage, and receive payments.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="farmer-verify-form">
          {/* Top Section: Select ID Type */}
          <div className="form-section">
            <label className="section-title">Identity Verification</label>
            <span className="section-sub">Select ID Type</span>
            <div className="id-options-grid">
              {idOptions.map((option) => {
                const isSelected = idType === option;
                return (
                  <div
                    key={option}
                    className={`select-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setIdType(option)}
                  >
                    <span>{option}</span>
                    <div className="circle-indicator" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Two-Column Middle Section */}
          <div className="middle-content-grid">
            {/* Left Side: ID Number Input */}
            <div className="left-column">
              <div className="form-group">
                <label>Input ID Number</label>
                <input
                  type="text"
                  placeholder="Input ID digit"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                />
              </div>

              {/* Declaration Section */}
              <div className="declaration-section">
                <label className="section-title">Declaration</label>
                <div
                  className={`select-card declaration-card ${
                    declaration ? "selected" : ""
                  }`}
                  onClick={() => setDeclaration(!declaration)}
                >
                  <span>
                    I confirm that the information I have provided is accurate.
                  </span>
                  <div className="circle-indicator" />
                </div>
              </div>
            </div>

            {/* Right Side: Upload Selfie */}
            <div className="right-column">
              <label className="section-title">Take or Upload a Selfie</label>
              <span className="section-sub">
                Ensure your face is clearly visible.
              </span>

              <div className="selfie-box">
                {selfie ? (
                  <img
                    src={selfie}
                    alt="Selfie Preview"
                    className="selfie-preview"
                  />
                ) : (
                  <div className="selfie-placeholder" />
                )}
              </div>

              <label htmlFor="selfie-upload" className="browse-btn">
                Browse picture
              </label>
              <input
                id="selfie-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="form-action">
            <Link className="submit-btn" to={"/"}>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerVerification;
