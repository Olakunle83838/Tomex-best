import React from "react";
import "./services.css";
import NavBar from "../../Components/NavBar";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Fresh Tomatoes",
      description:
        "Buy and sell fresh tomatoes directly through trusted farmers and verified buyers across Nigeria.",
      icon: "🥬",
      image: "/assets/images/fresh-tomatoes.jpg",
    },
    {
      id: 2,
      title: "Cold Storage",
      description:
        "Reserve nearby cold storage facilities to keep tomatoes fresh and reduce post-harvest losses.",
      icon: "🧊",
      image: "/assets/images/cold-storage.jpg",
    },
    {
      id: 3,
      title: "Logistics Services",
      description:
        "Book reliable transport providers to move tomatoes safely from farms to buyers or cold storage facilities.",
      icon: "🚚",
      image: "./assets/images/logistics.jpg",
    },
    {
      id: 4,
      title: "Verified Connections",
      description:
        "Connect with trusted farmers, buyers, transport providers, and storage managers.",
      icon: "🛡️",
      image: "./assets/images/verified.jpg",
    },
    {
      id: 5,
      title: "Order Tracking",
      description:
        "Track your orders and deliveries in real time from pickup to successful delivery.",
      icon: "📦",
      image: "./assets/images/tracking.jpg",
    },
    {
      id: 6,
      title: "Communication",
      description:
        "Chat and receive updates to coordinate deliveries, storage bookings, and tomato orders easily.",
      icon: "💬",
      image: "./assets/images/communication.jpg",
    },
  ];

  return (
    <div className="services-page-container">
      <NavBar />
      <div className="services-container">
        {/* Left Column - Hero Image */}
        <div className="services-hero-column">
          <img
            src="./assets/images/tomatoes-hero.jpg"
            alt="Fresh Red Tomatoes"
            className="hero-tomatoes-img"
          />
        </div>

        {/* Right Column - Content & Services Cards */}
        <div className="services-content-column">
          {/* Section Header */}
          <div className="services-header">
            <span className="header-leaf">🍃</span>
            <h1 className="header-title">Our Services</h1>
          </div>

          {/* 2x3 Services Grid */}
          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                {/* Top Banner / Image Area */}
                <div className="service-card-banner">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* Floating Center Icon Badge */}
                <div className="service-icon-badge">{service.icon}</div>

                {/* Bottom White Text Card */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
