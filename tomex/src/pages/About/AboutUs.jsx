import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-image-column">
        <img
          src="/assets/images/Mask.png"
          alt="Fresh Tomatoes"
          className="hero-image"
        />
      </div>

      <div className="about-content-column">
        <div className="section-header">
          <img src="/assets/images/leaf.png" className="leaf-icon" alt="" />
          <h1 className="cursive-title">About Us</h1>
        </div>

        <p className="description-text">
          TOMEX is an online marketplace built to help reduce post-harvest
          tomatoes losses in Nigeria. We connect farmers, buyers, transport
          providers, and cold storage facilities through one easy-to-use
          platform.
        </p>

        <p className="description-text">
          Instead of losing fresh tomatoes due to poor storage, lack of buyers,
          or transport challenges, users can quickly find trusted partners,
          manage orders, and move produce safely from farm to market.
        </p>

        <p className="description-text">
          Our goal is to reduce food waste, improve farmers' income, and ensure
          fresh tomatoes reach consumers on time.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <img src="/assets/images/good.png" className="check-icon" alt="" />
            <span>Always Fresh & Natural Foods</span>
          </div>
          <div className="feature-item highlight">
            <img src="/assets/images/good.png" className="check-icon" alt="" />
            <span>No Synthetic Chemicals</span>
          </div>
          <div className="feature-item">
            <img src="/assets/images/good.png" className="check-icon" alt="" />
            <span>Environment Benefits</span>
          </div>
          <div className="feature-item">
            <img src="/assets/images/good.png" className="check-icon" alt="" />
            <span>Best Prices</span>
          </div>
        </div>

        <section className="section-block">
          <div className="section-header center">
            <img src="/assets/images/leaf.png" className="leaf-icon" alt="" />
            <h2 className="cursive-title">Why Choose Tomex</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Trusted Farmers</span>
            </div>
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Reliable Buyers</span>
            </div>
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Easy Transport Booking</span>
            </div>
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Live Order Tracking</span>
            </div>
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Cold Storage Access</span>
            </div>
            <div className="feature-item">
              <img
                src="/assets/images/good.png"
                className="check-icon"
                alt=""
              />
              <span>Secure Transactions</span>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-header center">
            <img src="/assets/images/leaf.png" className="leaf-icon" alt="" />
            <h2 className="cursive-title">How it Works</h2>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-badge">
                <span className="step-title">STEP</span>
                <span className="step-number">1</span>
              </div>
              <p>List your tomatoes or browse available products.</p>
            </div>

            <div className="step-item">
              <div className="step-badge">
                <span className="step-title">STEP</span>
                <span className="step-number">2</span>
              </div>
              <p>
                Connect with trusted buyers, transport providers, or storage
                facilities.
              </p>
            </div>

            <div className="step-item">
              <div className="step-badge">
                <span className="step-title">STEP</span>
                <span className="step-number">3</span>
              </div>
              <p>Confirm your order and book transport or storage if needed.</p>
            </div>

            <div className="step-item">
              <div className="step-badge">
                <span className="step-title">STEP</span>
                <span className="step-number">4</span>
              </div>
              <p>Track delivery until the tomatoes arrive safely.</p>
            </div>

            <div className="step-item">
              <div className="step-badge">
                <span className="step-title">STEP</span>
                <span className="step-number">5</span>
              </div>
              <p>Complete the transaction and receive payment.</p>
            </div>
          </div>
        </section>

        <div className="cards-row">
          <div className="green-card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To reduce tomato waste by making it easier for farmers, buyers,
              transport providers, and cold storage facilities to work together.
            </p>
          </div>

          <div className="green-card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To become Nigeria's most trusted digital marketplace for fresh
              tomatoes trading and agricultural logistics.
            </p>
          </div>
        </div>

        <div className="action-footer">
          <button className="arrow-btn" aria-label="Next">
            ➔
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
