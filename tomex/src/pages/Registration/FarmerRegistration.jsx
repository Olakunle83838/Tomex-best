import React, { useState } from "react";
import "./FarmerRegistration.css";

function FarmerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    farmLocation: "",
    harvestQuantity: "",
    readyToSell: "",
    tomatoTypes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, readyToSell: value }));
  };

  const handleTomatoToggle = (type) => {
    setFormData((prev) => {
      const exists = prev.tomatoTypes.includes(type);
      if (exists) {
        return {
          ...prev,
          tomatoTypes: prev.tomatoTypes.filter((t) => t !== type),
        };
      } else {
        return { ...prev, tomatoTypes: [...prev.tomatoTypes, type] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Registration Data:", formData);
  };

  const tomatoOptions = [
    "Local Tomatoes",
    "Grape Tomatoes",
    "Cherry Tomatoes",
    "San Marzano Tomatoes",
    "Plum Tomatoes",
    "Roma Tomatoes",
    "Beefsteak Tomatoes",
    "Hybrid Tomatoes",
  ];

  return (
    <div className="farmer-reg-wrapper">
      <div className="farmer-reg-container">
        {/* Header Section */}
        <header className="farmer-reg-header">
          <h1>Create your Farmer Account</h1>
          <p>
            Join TOMEX to sell your tomatoes, connect with trusted buyers,
            <br />
            and book transport or cold storage with ease.
          </p>
        </header>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="farmer-reg-form">
          {/* Inputs Grid Layout */}
          <div className="form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g., Amina Bello"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a secure password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {/* Farm Location */}
            <div className="form-group">
              <label>Where is your farm located?</label>
              <input
                type="text"
                name="farmLocation"
                placeholder="e.g., Kaduna State, Nigeria"
                value={formData.farmLocation}
                onChange={handleInputChange}
              />
            </div>

            {/* Harvest Quantity */}
            <div className="form-group">
              <label>Harvest Quantity (Optional)</label>
              <input
                type="text"
                name="harvestQuantity"
                placeholder="e.g., 50 baskets or 2 tonnes"
                value={formData.harvestQuantity}
                onChange={handleInputChange}
              />
            </div>

            {/* Ready to sell? Options */}
            <div className="form-group">
              <label>Ready to sell?</label>
              <div className="radio-group">
                <div
                  className={`radio-card ${
                    formData.readyToSell === "ready_now" ? "selected" : ""
                  }`}
                  onClick={() => handleRadioChange("ready_now")}
                >
                  <span>Yes, my tomatoes are ready now.</span>
                  <div className="radio-circle" />
                </div>

                <div
                  className={`radio-card ${
                    formData.readyToSell === "harvesting_soon" ? "selected" : ""
                  }`}
                  onClick={() => handleRadioChange("harvesting_soon")}
                >
                  <span>Harvesting Soon</span>
                  <div className="radio-circle" />
                </div>
              </div>
            </div>
          </div>

          {/* Tomato Types Selection */}
          <div className="tomato-types-section">
            <label className="section-label">
              What type of tomatoes do you grow?
            </label>
            <div className="tomato-types-grid">
              {tomatoOptions.map((type) => {
                const isSelected = formData.tomatoTypes.includes(type);
                return (
                  <div
                    key={type}
                    className={`type-card ${isSelected ? "selected" : ""}`}
                    onClick={() => handleTomatoToggle(type)}
                  >
                    <span>{type}</span>
                    <div className="checkbox-circle" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit Action */}
          <div className="form-action">
            <button type="submit" className="submit-btn">
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmerRegistration;
