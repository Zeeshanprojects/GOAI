import React, { useEffect } from "react";
import Images from "../assets/Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
// at the top of Home.jsx (replace your current Swiper imports)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // modules
import "swiper/css";
import "swiper/css/pagination";

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
      image: Images.orbit2,
      title: "Go Connect",
      price: "$350",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts"],
      orb: "/orb2.png",
    },
    {
      image: Images.orbit3,
      title: "Go Create",
      price: "$1000",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares"],
      orb: "/orb3.png",
    },
    {
      image: Images.orbit4,
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
      <section className="hero-section container-fluid">
        <div className="background-effects"></div>

        <div className="content-wrapper content" data-aos="fade-up">
          <img src={Images.bannercircle} className="banner-circle" />
          <div className="text-content" data-aos="fade-up">
            <h1>
              Built for the new era of
              <br />
              wealth
            </h1>

            <button className="neon-btn">
              <span>Join Now</span>

              <div className="btn-glow"></div>
            </button>
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
   <section className="mission-section" data-aos="fade-up">
  <div className="mission-bg">
    <img src={Images.missionbackground} className="mission-image" />
  </div>

  <div className="mission-content">
    <h1 className="title">Mission</h1>
    <p>
      GO Ai exists to merge financial education, trading technology, and human 
      potential into a single ecosystem of empowerment. We engineer prosperity 
      through community, automation, and data-driven precision. We are building 
      the next generation of digital wealth creators, a network where ambition 
      meets algorithm.
    </p>
  </div>
</section>


      <section className="pricing-section mt-5">
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

      {/* ==================== AI ECOSYSTEM SECTION ==================== */}
      <section
        className="ecosystem-section"
        data-aos="fade-up"
        aria-labelledby="ecosystem-title"
      >
        <div className="container">
          <h1 id="ecosystem-title" className="title">
            AI Ecosystem
          </h1>
          <div className="eco-grid" data-aos="fade-up">
            <article className="eco-card" aria-hidden="false">
              <div className="eco-icon-wrap">
                <i
                  className="fa-solid fa-robot eco-icon"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="eco-h">AI Trading Engine</h3>
              <p className="eco-p">
                High-frequency inference, pattern recognition and automated
                order execution tuned for precision and risk control.
              </p>
            </article>

            <article className="eco-card">
              <div className="eco-icon-wrap">
                <i className="fa-solid fa-chart-line eco-icon"></i>
              </div>
              <h3 className="eco-h">Real-time Analytics</h3>
              <p className="eco-p">
                Live dashboards, performance metrics and signal quality
                indicators so you always see the truth behind the data.
              </p>
            </article>

            <article className="eco-card">
              <div className="eco-icon-wrap">
                <i className="fa-solid fa-bell-concierge eco-icon"></i>
              </div>
              <h3 className="eco-h">Smart Alerts</h3>
              <p className="eco-p">
                Personalized, threshold-based alerts that notify you only when
                actionable and high probability signals are present.
              </p>
            </article>

            <article className="eco-card">
              <div className="eco-icon-wrap">
                <i className="fa-solid fa-cogs eco-icon"></i>
              </div>
              <h3 className="eco-h">Automation Studio</h3>
              <p className="eco-p">
                Create and schedule rules, strategies and automations —
                backtest, simulate, then deploy with one click.
              </p>
            </article>

            <article className="eco-card">
              <div className="eco-icon-wrap">
                <i className="fa-solid fa-chalkboard-user eco-icon"></i>
              </div>
              <h3 className="eco-h">Education Hub</h3>
              <p className="eco-p">
                On-demand courses, live workshops, and mentorship tracks
                designed to accelerate skill and confidence.
              </p>
            </article>

            <article className="eco-card">
              <div className="eco-icon-wrap">
                <i className="fa-solid fa-users-gear eco-icon"></i>
              </div>
              <h3 className="eco-h">Community & Labs</h3>
              <p className="eco-p">
                Collaborative labs, idea exchange, and community-built
                strategies — iterate faster with the network.
              </p>
            </article>
          </div>
        </div>

        {/* decorative orbs — optional, consistent with theme */}
        <div className="ecosystem-orb orb-eco-1"></div>
        <div className="ecosystem-orb orb-eco-2"></div>
      </section>
      {/* ==================== COMMUNITY SECTION ==================== */}

      {/* ==================== VISION SECTION ==================== */}
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
      {/* ==================== FAQ SECTION ==================== */}
      <section className="faq-section">
        <h1 className="title" data-aos="fade-up">
          Frequently Asked Questions
        </h1>

        <div className="faq-container mt-5" data-aos="fade-up">
          {/* FAQ ITEM 1 */}
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              What is GOAI and how does it work?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div id="faq1" className="collapse faq-answer">
              GOAI is a wealth-tech ecosystem combining AI, automation, tools,
              and education to help individuals make smarter financial
              decisions. Members access analytics, mentorship, and software
              built for scalable growth.
            </div>
          </div>

          {/* FAQ ITEM 2 */}
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              What do I get with a membership?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div id="faq2" className="collapse faq-answer">
              Membership includes platform access, premium education, alerts,
              smart tools, mentorship sessions, community support and rank-based
              benefits.
            </div>
          </div>

          {/* FAQ ITEM 3 */}
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              Are the tools beginner-friendly?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div id="faq3" className="collapse faq-answer">
              Yes. Every tool and feature is designed for both beginners and
              advanced users, with clear guidance, tutorials, and live support.
            </div>
          </div>

          {/* FAQ ITEM 4 */}
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              How does the ranking system work?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div id="faq4" className="collapse faq-answer">
              Ranks represent progress and recognition within the community. As
              members grow, contribute, and unlock achievements, they advance to
              higher tiers with new rewards.
            </div>
          </div>

          {/* FAQ ITEM 5 */}
          <div className="faq-item">
            <button
              className="faq-question"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
            >
              Can I upgrade my membership anytime?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div id="faq5" className="collapse faq-answer">
              Yes. You can upgrade to a higher membership plan instantly and
              unlock additional features, automations, and exclusive benefits.
            </div>
          </div>
        </div>
      </section>
      {/* ==================== TESTIMONIALS (SWIPER) ==================== */}
      {/* ==================== TESTIMONIALS (SWIPER) ==================== */}
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
                <div className="testimonial-card h-100">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
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
