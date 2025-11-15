import React from "react";
import Images from "../assets/Images/Image";
import "./Home.css";

export default function Home() {
   const plans = [
    {
      image:Images.orbit1,
      title: "Go Concept",
      price: "$199",
      fee: "Initial Fee",
      features: ["Basic"],
      orb: "/orb1.png",
    },
    {
        image:Images.orbit2,
      title: "Go Connect",
      price: "$349",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts"],
      orb: "/orb2.png",
    },
    {
        image:Images.orbit3,
      title: "Go Create",
      price: "$999",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares"],
      orb: "/orb3.png",
    },
    {
        image:Images.orbit4,
      title: "Go Complete",
      price: "$1,699",
      fee: "Initial Fee",
      features: [
        "More Education",
        "More Alerts",
        "More Softwares",
        "VIP",
        "Automations",
      ],
      orb: "/orb4.png",
    },
  ]
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

        {/* Hero Image */}
        <img src={Images.heroimage} alt="heroimage" className="hero-image" />
      </section>

    <section className="mission-section">
  <div className="mission-overlay"></div>

  <div className="mission-content">
    <h1 className="mission-title">Our Mission</h1>

    <div className="mission-divider"></div>

    <p className="mission-text">
  GO Ai exists to merge financial education, trading technology, and human
  potential into a unified ecosystem of empowerment. Our mission is to make
  advanced wealth-building tools accessible to everyone—combining intelligent
  automation, real-time analytics, and the strength of community.  
  <br /><br />
  We believe financial growth should not depend on luck or background, but on
  knowledge, precision, and scalable systems. By connecting people with
  cutting-edge tools, mentorship, and AI-driven strategies, we enable individuals
  to think smarter, move faster, and create opportunities that once seemed out
  of reach.  
  <br /><br />
  GO Ai is building the next generation of digital wealth creators—a global
  network where ambition meets algorithm, and where every member has the power
  to transform information into impact.
</p>

  </div>
</section>

<section className="pricing-section">
  
  {/* Heading + Description */}
  <div className="pricing-header">
    <h1 className="title">Membership</h1>
    <p className="subtitle">
      Choose the perfect plan tailored for your growth and digital success.
    </p>
  </div>

  <div className="pricing-wrapper mt-5">
    {plans.map((plan, index) => (
      <div key={index} className="pricing-card">
        <img src={plan.image} className="orb-img" alt="" />

        <h3>{plan.title}</h3>

        <h2 className="price">{plan.price}</h2>
        <p className="fee-text">{plan.fee}</p>

        <div className="features">
          {plan.features.map((f, i) => (
            <p key={i}>{f}</p>
          ))}
        </div>

        <button className="select-btn">SELECT</button>
      </div>
    ))}
  </div>
</section>

    </>
  );
}
