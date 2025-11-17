import React, { useEffect } from "react";
import Images from "../assets/Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home ! GOAI";
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const plans = [
    {
      image: Images.orbit1,
      title: "Go Concept",
      price: "$199",
      fee: "Initial Fee",
      features: ["Basic"],
      orb: "/orb1.png",
    },
    {
      image: Images.orbit2,
      title: "Go Connect",
      price: "$349",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts"],
      orb: "/orb2.png",
    },
    {
      image: Images.orbit3,
      title: "Go Create",
      price: "$999",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares"],
      orb: "/orb3.png",
    },
    {
      image: Images.orbit4,
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
  ];
  return (
    <>
      <section className="hero-section">
        <div className="background-effects"></div>

        <div className="content-wrapper">
          <div className="text-content" data-aos="fade-up">
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
                <strong>15000+</strong>
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

        {/* Hero Image */}
        <img
          src={Images.heroimage}
          alt="heroimage"
          className="hero-image"
          data-aos="fade-up"
        />
      </section>

      <section className="mission-section">
        <div className="mission-overlay"></div>

        <div className="mission-content " data-aos="fade-up">
          <h1 className="title">Mission</h1>
          <p className="mission-text">
            GO Ai exists to merge financial education, trading technology, and
            human potential into a unified ecosystem of empowerment. Our mission
            is to make advanced wealth-building tools accessible to everyone
            combining intelligent automation, real-time analytics, and the
            strength of community.
            <br />
            <br />
            We believe financial growth should not depend on luck or background,
            but on knowledge, precision, and scalable systems. By connecting
            people with cutting-edge tools, mentorship, and AI-driven
            strategies, we enable individuals to think smarter, move faster, and
            create opportunities that once seemed out of reach.
            <br />
            <br />
            GO Ai is building the next generation of digital wealth creators—a
            global network where ambition meets algorithm, and where every
            member has the power to transform information into impact.
          </p>
        </div>
      </section>

      <section className="pricing-section ">
        {/* Heading + Description */}
        <div className="pricing-header" data-aos="fade-up">
          <h1 className="title">Membership</h1>
        </div>

        <div className="pricing-wrapper mt-5" data-aos="fade-up">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <img src={plan.image} className="orb-img" alt="orbit-logo" />

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
      <section className="rank-section">
        <h1 className="title" data-aos="fade-up">
          Ranks
        </h1>

        <div className="rank-wrapper">
          {/* LEFT SIDE PYRAMID IMAGE */}
          <div className="rank-image-wrapper">
            <img
              src={Images.ranks}
              alt="Ranks Pyramid"
              className="rank-image"
              data-aos="fade-up"
            />
          </div>

          {/* RIGHT SIDE TEXT CONTENT */}
          <div className="rank-content" data-aos="fade-up">
            <div className="rank-group-wrapper">
              <div className="rank-group">
                <h2 className="rank-heading">TRANSCEND ERA</h2>
                <ul>
                  <li>
                    <img src={Images.smallicon1} /> Echelon
                  </li>
                  <li>
                    <img src={Images.smallicon2} /> White Diamond
                  </li>
                  <li>
                    <img src={Images.smallicon3} /> Black Diamond
                  </li>
                </ul>
              </div>
            </div>

            <div className="rank-group-wrapper">
              <div className="rank-group">
                <h2 className="rank-heading">LEGACY ERA</h2>
                <ul>
                  <li>
                    <img src={Images.smallicon4} /> Ruby
                  </li>
                  <li>
                    <img src={Images.smallicon5} /> Emerald
                  </li>
                  <li>
                    <img src={Images.smallicon6} /> Sapphire
                  </li>
                </ul>
              </div>
            </div>

            <div className="rank-group-wrapper">
              <div className="rank-group">
                <h2 className="rank-heading">RISE ERA</h2>
                <ul>
                  <li>
                    <img src={Images.smallicon7} /> Gold
                  </li>
                  <li>
                    <img src={Images.smallicon8} /> Silver
                  </li>
                  <li>
                    <img src={Images.smallicon9} /> Opal
                  </li>
                </ul>
              </div>
            </div>

            <div className="rank-group-wrapper">
              <div className="rank-group">
                <h2 className="rank-heading">FOUNDATION ERA</h2>
                <ul>
                  <li>
                    <img src={Images.smallicon10} /> Onyx
                  </li>
                  <li>
                    <img src={Images.smallicon11} /> Pearl
                  </li>
                  <li>
                    <img src={Images.smallicon12} /> Amber
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* ==================== COMMUNITY SECTION ==================== */}
      <section className="community-section">
        <h1 className="title" data-aos="fade-up">
          Community
        </h1>
        <p className="community-text" data-aos="fade-up">
          GO Ai is more than a platform — it’s a movement of innovators,
          dreamers, builders and achievers. Together, we create opportunities,
          share knowledge, and lift each other to new heights of wealth and
          leadership.
        </p>

        <div className="community-grid" data-aos="fade-up">
          <div className="community-box">
            <div className="orb-icon-wrapper">
              <img src={Images.orbit3} className="orb-img" alt="orbit-logo" />
              <i className="fa-solid fa-users community-icon"></i>
            </div>

            <h3>Members</h3>
            <p>15,000+ active individuals building their future.</p>
          </div>


           <div className="community-box">
            <div className="orb-icon-wrapper">
              <img src={Images.orbit3} className="orb-img" alt="orbit-logo" />
              <i className="fa-solid fa-globe community-icon"></i>
            </div>

            <h3>Global Network</h3>
            <p>Connected across continents with one shared vision.</p>
          </div>
           <div className="community-box">
            <div className="orb-icon-wrapper">
              <img src={Images.orbit3} className="orb-img" alt="orbit-logo" />
              <i className="fa-solid fa-calendar community-icon"></i>
            </div>

            <h3>Daily Sessions</h3>
            <p>Consistent guidance, training & live updates.</p>
          </div>
           <div className="community-box">
            <div className="orb-icon-wrapper">
              <img src={Images.orbit3} className="orb-img" alt="orbit-logo" />
              <i className="fa-solid fa-medal community-icon"></i>
            </div>

            <h3>Elite Leadership</h3>
            <p>Led by top mentors and experienced achievers</p>
          </div>
        </div>
      </section>
      {/* ==================== VISION SECTION ==================== */}
      <section className="vision-section">
        <h1 className="title" data-aos="fade-up">
          Vision
        </h1>
        <p className="vision-text" data-aos="fade-up">
          GO Ai is building the world’s most intelligent and unified wealth
          ecosystem—an environment where automation, precision, and human
          potential merge into a single force. Our vision is to create tools
          that operate at institutional speed, providing individuals with
          capabilities once reserved for large financial entities.
          <br />
          <br />
          We aim to redefine what is possible in digital wealth creation by
          empowering every member with access to intelligent technology,
          real-time analytics, and high-level decision automation. Our systems
          are designed to simplify complexity, eliminate guesswork, and enhance
          accuracy, ensuring that growth becomes predictable rather than
          uncertain.
          <br />
          <br />
          In the future, we see a world where opportunity is not limited by
          experience, geography, or background. Instead, it is expanded by
          scalable tools, educational empowerment, and a global network of
          achievers working together toward financial independence.
          <br />
          <br />
          GO Ai is not just innovating for today—we are building the foundation
          for the next era of wealth creation, where every individual has the
          ability to think smarter, move faster, and unlock limitless potential.
        </p>
      </section>

    
    </>
  );
}
