import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Platform.css";

export default function Platform() {
    
      useEffect(() => {
        document.title = "Platform | GOAI";
        AOS.init({
          duration: 1200,
          offset: 120,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
  return (
    <>
  

      {/* FEATURE GRID */}
      <section className="platform-features platform-container">
        
     <div data-aos="fade-up">
            <div className="pricing-header">
  <h1 className="title">Platform</h1>
        </div>
 <p className="payment-subtext">
 A unified ecosystem built to accelerate your financial growth with
          intelligent automation, real-time insights, and powerful decision tools.
</p>
        </div>
        <div className="features-grid">

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-robot feature-icon"></i>
            <h3 className="feature-title">AI Automation Engine</h3>
            <p className="feature-text">
              Automatically analyze opportunities and execute intelligent 
              strategies with precision and speed.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-chart-line feature-icon"></i>
            <h3 className="feature-title">Real-Time Analytics</h3>
            <p className="feature-text">
              Monitor trends, track performance, and access live data that 
              helps you stay ahead in every situation.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-shield feature-icon"></i>
            <h3 className="feature-title">Security & Stability</h3>
            <p className="feature-text">
              Enterprise-level security ensures your data, decisions, and 
              wealth remain protected at all times.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-network-wired feature-icon"></i>
            <h3 className="feature-title">Global Infrastructure</h3>
            <p className="feature-text">
              Scalable systems that connect thousands of users across regions 
              to a unified digital ecosystem.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-lightbulb feature-icon"></i>
            <h3 className="feature-title">Smart Insights</h3>
            <p className="feature-text">
              From decision support to forecasting, GO Ai provides actionable 
              insights tailored to your goals.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up">
            <i className="fa-solid fa-layer-group feature-icon"></i>
            <h3 className="feature-title">Unified Ecosystem</h3>
            <p className="feature-text">
              All tools, analytics, and automation combined into a single 
              powerful environment built for growth.
            </p>
          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="platform-value">
        <div className="platform-container" data-aos="fade-up">
            <div className="text-center">
                  <h2 className="title">Why Choose GOAI?</h2>
<p className="text-white">GO Ai empowers you to make smarter financial decisions with clarity and precision. It eliminates guesswork by providing institutional-level technology, real-time intelligence, and automation tools once reserved for professional investors. With the ability to predict opportunities before they happen and automate repetitive processes, GO Ai helps you grow your wealth confidently while staying in full control of every decision.</p>
        </div>
            </div>
        
      </section>

    </>
  );
}
