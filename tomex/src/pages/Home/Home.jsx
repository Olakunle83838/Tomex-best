import React from "react";
import "./style.css";
import NavBar from "../../Components/NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <main className="hero">
        <section className="hero-left">
          <h1 className="offer-heading">
            Connecting Every Harvest to Every Market. Sell More. Earn More.
          </h1>
          <p className="offer-detail">
            Tomex helps farmers, buyers, transporters, and cold storage
            providers work together to reduce post-harvest losses and deliver
            fresh tomatoes efficiently.
          </p>

          <div className="offer-container">
            <p className="offer offer-right">Sell Tomatoes</p>
            <p className="offer">Buy Tomatoes</p>
            <p className="offer offer-right">Book Logistics</p>
            <p className="offer">Find Cold Storage</p>
          </div>
        </section>

        <img
          src="./assets/images/Vector.png"
          className="vector-aro"
          alt="Decorative Arrow"
        />

        <section className="hero-right">
          <div className="hero-img"> </div>
          {/* <img
            src="./assets/images/farm-image.jpg"
            alt="Farm harvest"
            className="hero-img"
          /> */}
        </section>
      </main>
    </div>
  );
}

export default Home;
