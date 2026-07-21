import React, { useState } from "react";
import "./BuyerRegistration.css";

function BuyerRegistration() {
  const [formData, setFormData] = useState({
    businessName: "",
    password: "",
    confirmPassword: "",
    businessAddress: "",
    phoneNumber: "",
    emailAddress: "",
    businessLocation: "",
    preferredDeliveryLocation: "",
    buyerType: "",
    purchaseVolume: "",
    agreedTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuyerTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, buyerType: type }));
  };

  const handleVolumeSelect = (volume) => {
    setFormData((prev) => ({ ...prev, purchaseVolume: volume }));
  };

  const handleCheckboxToggle = () => {
    setFormData((prev) => ({ ...prev, agreedTerms: !prev.agreedTerms }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Registration Data:", formData);
  };

  const buyerTypes = [
    "Tomato Trader",
    "Wholesaler",
    "Restaurant",
    "Individual Buyer",
    "Retailer",
    "Food Processor",
  ];

  const volumeOptions = [
    "More than 100 baskets",
    "10–50 baskets",
    "50–100 baskets",
  ];

  return (
    <div className="buyer-reg-wrapper">
      <div className="buyer-reg-container">
        {/* Header Section */}
        <header className="buyer-reg-header">
          <h1>Create Your Buyer Account</h1>
          <p>
            Join TOMEX to source fresh tomatoes from verified farmers,
            <br />
            place orders, and enjoy reliable delivery services.
          </p>
        </header>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="buyer-reg-form">
          {/* 2-Column Inputs Grid */}
          <div className="form-grid">
            {/* Business Name */}
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                name="businessName"
                placeholder="e.g., FreshMart Supermarket Ltd."
                value={formData.businessName}
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

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            {/* Business Address */}
            <div className="form-group">
              <label>Business Address</label>
              <input
                type="text"
                name="businessAddress"
                placeholder="Enter your business address"
                value={formData.businessAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Enter Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Enter your email address"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* Location of Business */}
            <div className="form-group">
              <label>Location of Business</label>
              <input
                type="text"
                name="businessLocation"
                placeholder="e.g Lagos, Nigeria"
                value={formData.businessLocation}
                onChange={handleInputChange}
              />
            </div>

            {/* Preferred Delivery Location */}
            <div className="form-group">
              <label>Preferred Delivery Location</label>
              <input
                type="text"
                name="preferredDeliveryLocation"
                placeholder="Enter delivery address"
                value={formData.preferredDeliveryLocation}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Buyer Type Selection */}
          <div className="form-section">
            <label className="section-title">Buyer Type</label>
            <span className="section-sub">Select Buyer Type</span>
            <div className="options-grid 3-col">
              {buyerTypes.map((type) => {
                const isSelected = formData.buyerType === type;
                return (
                  <div
                    key={type}
                    className={`select-card ${isSelected ? "selected" : ""}`}
                    onClick={() => handleBuyerTypeSelect(type)}
                  >
                    <span>{type}</span>
                    <div className="circle-indicator" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estimated Purchase Volume */}
          <div className="form-section">
            <label className="section-title">Estimated Purchase Volume</label>
            <div className="options-grid 3-col">
              {volumeOptions.map((volume) => {
                const isSelected = formData.purchaseVolume === volume;
                return (
                  <div
                    key={volume}
                    className={`select-card ${isSelected ? "selected" : ""}`}
                    onClick={() => handleVolumeSelect(volume)}
                  >
                    <span>{volume}</span>
                    <div className="circle-indicator" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terms & Conditions Checkbox Card */}
          <div className="form-section">
            <label className="section-title">Checkbox</label>
            <div className="checkbox-wrapper">
              <div
                className={`select-card terms-card ${
                  formData.agreedTerms ? "selected" : ""
                }`}
                onClick={handleCheckboxToggle}
              >
                <span>
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>
                <div className="circle-indicator" />
              </div>
            </div>
          </div>

          {/* Save and Continue Button */}
          <div className="form-action">
            <button type="submit" className="submit-btn">
              Save and continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BuyerRegistration;
