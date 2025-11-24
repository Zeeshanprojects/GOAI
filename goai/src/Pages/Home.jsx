import React, { useEffect, useState, useMemo } from "react";
import Images from "../assets/Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Select from "react-select";
import countryList from "react-select-country-list";

// import "flag-icons/css/flag-icons.min.css";
/* ===================== MODAL COMPONENT ===================== */
function MembershipModal({ isOpen, onClose, selectedPlan }) {
  const navigate = useNavigate();

  const [countryOption, setCountryOption] = useState(null);
  const [languageOption, setLanguageOption] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  // Generate country list once
  // const countryOptions = useMemo(() => countryList().getData(), []);
  const countryOptions = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
        flagClass: `fi fi-${country.value.toLowerCase()}`,
        rawLabel: country.label, // Keep pure name for backend
      }));
  }, []);

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Urdu", label: "Urdu" },
    { value: "Arabic", label: "Arabic" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
  ];

  const selectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#2c1a44",
      borderColor: "hsla(0, 0%, 100%, 0.20)",
      boxShadow: "none",
      minHeight: "44px",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#ffffff",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2c1a44",
      zIndex: 9999,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#3b215f" : "#2c1a44",
      color: "#ffffff",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(255,255,255,0.7)",
    }),
  };

  const filterCountries = (option, rawInput) => {
    if (!rawInput) return true;
    const input = rawInput.trim().toLowerCase();
    return option.data.rawLabel.toLowerCase().startsWith(input);
  };

  // Step 1 → Step 2
  const handleNext = () => {
    if (!countryOption || !languageOption) {
      alert("Please select both country and language.");
      return;
    }
    setShowFormModal(true);
  };

  // Step 2 → Step 1
  const handleBack = () => {
    setShowFormModal(false);
  };

  // Step 2 → Payment Page
  const handleContinue = () => {
    navigate("/payment", {
      state: {
        plan: selectedPlan,
        country: countryOption.rawLabel,

        language: languageOption.value,
      },
    });
  };

  return (
    <>
      {/* ---------------- FIRST MODAL ---------------- */}
      {isOpen && !showFormModal && (
        <div className="membership-modal-overlay">
          <div className="membership-modal">
            <h2 className="modal-title">Complete Your Membership</h2>

            {selectedPlan && (
              <p className="modal-plan">
                Selected Plan: <strong>{selectedPlan.title}</strong>
              </p>
            )}

            <div className="modal-field">
              <label>Country</label>
              <Select
                options={countryOptions}
                value={countryOption}
                onChange={setCountryOption}
                placeholder="Select Country"
                isSearchable
                filterOption={filterCountries}
                formatOptionLabel={(option) => (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className={option.flagClass} />
                    {option.label}
                  </div>
                )}
                styles={selectStyles}
              />
            </div>

            <div className="modal-field">
              <label>Language</label>
              <Select
                options={languageOptions}
                value={languageOption}
                onChange={setLanguageOption}
                placeholder="Select Language"
                styles={selectStyles}
              />
            </div>

            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="modal-btn next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- SECOND MODAL ---------------- */}
      {showFormModal && (
        <div className="membership-modal-overlay">
          <div className="membership-modal">
            <h2 className="modal-title">Your Account Information</h2>

            {/* Mailing Address */}
            <h3 className="modal-section-title">Mailing Address</h3>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="text"
                placeholder="Address Line 1"
              />
              <input
                className="modal-input"
                type="text"
                placeholder="Address Line 2"
              />
            </div>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="text"
                placeholder="Address Line 3"
              />
              <input
                className="modal-input"
                type="text"
                placeholder="ZIP Code"
              />
            </div>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="City" />
              <input className="modal-input" type="text" placeholder="State" />
            </div>

            {/* Contact Info */}
            <h3 className="modal-section-title">Contact Information</h3>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="text"
                placeholder="Primary Phone Number"
              />
              <input
                className="modal-input"
                type="text"
                placeholder="Mobile Number"
              />
            </div>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="modal-input"
                type="email"
                placeholder="Confirm Email Address"
              />
            </div>

            {/* Account Info */}
            <h3 className="modal-section-title">Your Account Information</h3>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="text"
                placeholder="Username"
              />
              <input
                className="modal-input"
                type="text"
                placeholder="Your Website URL: ignius.biz"
              />
            </div>

            <div className="modal-two-columns">
              <input
                className="modal-input"
                type="password"
                placeholder="Choose Your Password"
              />
              <input
                className="modal-input"
                type="password"
                placeholder="Confirm Your Password"
              />
            </div>

            <input
              className="modal-input"
              type="text"
              placeholder="Your Enroller: Aws Qasem"
              style={{ marginTop: "10px" }}
              disabled
            />

            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={handleBack}>
                Back
              </button>

              <button className="modal-btn next" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ===================== MAIN HOME COMPONENT ===================== */

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    document.title = "Home | GOAI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const plans = [
    {
      image: Images.icon1,
      title: "Go Connect",
      price: "$350",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts"],
      orb: "/orb2.png",
    },
    {
      image: Images.icon2,
      title: "Go Create",
      price: "$1200",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares"],
      orb: "/orb3.png",
    },
    {
      image: Images.icon3,
      title: "Go Complete",
      price: "$1700",
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
      {/* =============== HERO SECTION =============== */}
      <section className="hero-section container-fluid">
        <div className="background-effects"></div>

        <div className="content-wrapper content" data-aos="fade-up">
          <img
            rel="preload"
            src={Images.bannercircle}
            className="banner-circle"
            fetchPriority="high"
            alt="GOAI Sphere"
          />
          <div className="text-content" data-aos="fade-up">
            <h1>
              Built for the new era of
              <br />
              wealth
            </h1>

            <Link to="/payment">
              <button className="neon-btn">
                <span>Join Now</span>
                <div className="btn-glow"></div>
              </button>
            </Link>

            <div className="orbit-wrapper">
              <div className="orbits">
                <img src={Images.orbit1} alt="" />
                <img src={Images.orbit2} alt="" />
                <img src={Images.orbit3} alt="" />
                <img src={Images.orbit4} alt="" />
                <p className="orbit-title text-uppercase">
                  Unlock the
                  <br /> Future of
                  <br /> Finance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== MISSION SECTION =============== */}
      <section className="mission-section" data-aos="fade-up">
        <div className="mission-bg">
          <img
            src={Images.missionbackground}
            className="mission-image"
            alt="Mission"
          />
        </div>

        <div className="mission-content">
          <h1 className="title">Mission</h1>

          <p>
            <h6>To reinvent wealth through intelligence.</h6>
            GO Ai exists to merge financial education, trading technology, and
            human potential into a single ecosystem of empowerment. We engineer
            prosperity through community, automation, and data-driven precision.
            We are building the next generation of digital wealth creators, a
            network where ambition meets algorithm.
          </p>
        </div>
      </section>

      {/* =============== PRICING / MEMBERSHIP SECTION =============== */}
      <section className="pricing-section mt-5">
        <div className="pricing-header" data-aos="fade-up">
          <h1 className="title">Membership</h1>
        </div>

        <div className="pricing-wrapper mt-5" data-aos="fade-up">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <img src={plan.image} className="orb-img" alt="orbit-logo" />

              <h3 className="mt-3 price-heading">{plan.title}</h3>

              <h2 className="price">{plan.price}</h2>
              <p className="fee-text">{plan.fee}</p>

              <div className="features">
                {plan.features.map((f, i) => (
                  <p key={i}>{f}</p>
                ))}
              </div>

              <button
                className="select-btn"
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowModal(true);
                }}
              >
                SELECT
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =============== MODAL (for SELECT) =============== */}
      <MembershipModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedPlan={selectedPlan}
      />

      {/* =============== ECOSYSTEM SECTION =============== */}
      <section
        className="ecosystem-section"
        data-aos="fade-up"
        aria-labelledby="ecosystem-title"
      >
        <div className="container">
          <h1 id="ecosystem-title" className="title">
            GO Ecosystem
          </h1>
          <div className="eco-grid" data-aos="fade-up">
            <article className="eco-card h-100" aria-hidden="false">
              <img
                src={Images.Ecosystem3}
                alt="ecosystem"
                className="eco-icon-fix"
                height={120}
                width={120}
              />
              <h3 className="eco-h">GO OS</h3>
              <p className="eco-p">
                Get the Core Operating System of the entire AI Trading Plane,
                powered by high-frequency inference, advanced pattern
                recognition, and automated order execution engineered for
                precision, risk control, and consistent performance globally
              </p>
            </article>

            <article className="eco-card">
              <img
                src={Images.Ecosystem2}
                alt="ecosystem"
                height={120}
                width={120}
              />
              <h3 className="eco-h">GO Insights</h3>
              <p className="eco-p">
                Get personalized, threshold-based alerts that trigger only when
                the market shows high-probability, actionable
                opportunities,complete with trade alerts, exact entry/exit
                points, and clear bias guidance so you never second-guess your
                next move.
              </p>
            </article>

            <article className="eco-card">
              <img
                src={Images.Ecosystem4}
                alt="ecosystem"
                height={120}
                width={120}
              />
              <h3 className="eco-h">GO Lab</h3>
              <p className="eco-p">
                Get a constantly evolving suite of tools, indicators,
                strategies, and automation, all designed, tested, and optimized
                to be simple, powerful, and ready to deploy. Everything you need
                to build, refine, and execute high-performance trading systems
                with confidence.
              </p>
            </article>

            <article className="eco-card">
              <img
                src={Images.Ecosystem1}
                alt="ecosystem"
                height={120}
                width={120}
              />
              <h3 className="eco-h">GO Library</h3>
              <p className="eco-p">
                Get on-demand courses, live workshops, and mentorship tracks
                designed to fast-track your skill and confidence, all delivered
                by expert coaches inside a complete education portal loaded with
                courses, mastery paths, and step-by-step tutorials.
              </p>
            </article>
          </div>
        </div>

        <div className="ecosystem-orb orb-eco-1"></div>
        <div className="ecosystem-orb orb-eco-2"></div>
      </section>

      {/* =============== VISION SECTION =============== */}
      <section className="vision-section mt-0">
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

      {/* =============== FAQ SECTION =============== */}
      <section className="faq-section">
        <h1 className="title" data-aos="fade-up">
          Frequently Asked Questions
        </h1>

        <div className="faq-container mt-5" data-aos="fade-up">
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              What is GOAI and how does it work?
              <i className="fa-solid fa-chevron-down faq-icon mt-2"></i>
            </button>
            <div id="faq1" className="collapse faq-answer">
              GOAI is a wealth-tech ecosystem combining AI, automation, tools,
              and education to help individuals make smarter financial
              decisions. Members access analytics, mentorship, and software
              built for scalable growth.
            </div>
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              What do I get with a membership?
              <i className="fa-solid fa-chevron-down faq-icon mt-2"></i>
            </button>
            <div id="faq2" className="collapse faq-answer">
              Membership includes platform access, premium education, alerts,
              smart tools, mentorship sessions, community support and rank-based
              benefits.
            </div>
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              Are the tools beginner-friendly?
              <i className="fa-solid fa-chevron-down faq-icon mt-2"></i>
            </button>
            <div id="faq3" className="collapse faq-answer">
              Yes. Every tool and feature is designed for both beginners and
              advanced users, with clear guidance, tutorials, and live support.
            </div>
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              How does the ranking system work?
              <i className="fa-solid fa-chevron-down faq-icon mt-2"></i>
            </button>
            <div id="faq4" className="collapse faq-answer">
              Ranks represent progress and recognition within the community. As
              members grow, contribute, and unlock achievements, they advance to
              higher tiers with new rewards.
            </div>
          </div>

          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
            >
              Can I upgrade my membership anytime?
              <i className="fa-solid fa-chevron-down faq-icon mt-2 "></i>
            </button>
            <div id="faq5" className="collapse faq-answer">
              Yes. You can upgrade to a higher membership plan instantly and
              unlock additional features, automations, and exclusive benefits.
            </div>
          </div>
        </div>
      </section>

      {/* =============== TESTIMONIALS SECTION =============== */}
      <section className="testimonials-section" data-aos="fade-up">
        <div className="container">
          <h1 className="title">Testimonials</h1>
          <p className="testimonials-sub">
            Hear from the GO Ai members transforming their financial future.
          </p>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper"
          >
            {[
              {
                name: "Ahsan R.",
                role: "Entrepreneur",
                text: "GO Ai transformed my trading mindset completely.",
              },
              {
                name: "Nimra S.",
                role: "Data Analyst",
                text: "The AI insights feel like having a professional advisor.",
              },
              {
                name: "Saad M.",
                role: "Trader",
                text: "Automation gave me peace of mind and consistent results.",
              },
              {
                name: "Haris I.",
                role: "Investor",
                text: "Real-time dashboards changed how I evaluate markets.",
              },
              {
                name: "Maira K.",
                role: "Student",
                text: "Education + tools = best combination for growth.",
              },
              {
                name: "Bilal U.",
                role: "Crypto Trader",
                text: "The alert system is incredibly accurate.",
              },
              {
                name: "Khadija Z.",
                role: "Marketer",
                text: "Community support keeps me motivated.",
              },
              {
                name: "Zain A.",
                role: "Engineer",
                text: "Smoothest ecosystem I've ever seen.",
              },
              {
                name: "Ali R.",
                role: "Freelancer",
                text: "This platform helped me diversify smartly.",
              },
              {
                name: "Hamza T.",
                role: "Developer",
                text: "Precision tracking tools are next-level.",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card h-120">
                  <div className="stars">★★★★★</div>

                  <p className="t-text">“{t.text}”</p>
                  <h3 className="t-name">{t.name}</h3>
                  <p className="t-role">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
