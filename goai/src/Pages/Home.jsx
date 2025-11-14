import React from "react";
import Images from "../assets/Images/Image";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero-section">
  <div className="background-effects"></div>

  <div className="content-wrapper">
    <div className="text-content">
      <h1>
        Built for the new era of
        <br />
        wealth
      </h1>

      <div className="stats">
        <div className="stat-item">
          <strong>10+</strong>
          <span>YEARS</span>
        </div>
        <div className="stat-item">
          <strong>50+</strong>
          <span>PRODUCTS</span>
        </div>
        <div className="stat-item">
          <strong>15K+</strong>
          <span>MEMBERS</span>
        </div>
      </div>

      <button className="neon-btn">
        <span>Join Now</span>
        <div className="btn-glow"></div>
      </button>
    </div>
  </div>

  {/* Floating orbs */}
  <div className="floating-orbs">
    <div className="orb orb-1"></div>
    <div className="orb orb-2"></div>
    <div className="orb orb-3"></div>
  </div>

</section>
<section className="mission-section">
  <div className="background-effects"></div>

  <div className="mission-content">
    <h1>Mission</h1>
    <p>
      GO Ai exists to merge financial education, trading technology, and human potential into a single ecosystem of empowerment.
      We engineer prosperity through community, automation, and data-driven precision.
      We are building the next generation of digital wealth creators, a network where ambition meets algorithm.
    </p>
  </div>
</section>

    </>




  );
}