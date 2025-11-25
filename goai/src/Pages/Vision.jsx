import React from "react";
import { useEffect } from "react";
import "./Vision.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Vision() {
  useEffect(() => {
    document.title = "Vision | GOAI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <section className="vision-tips-section ">
        <div data-aos="fade-up">
          <div className="pricing-header">
            <h1 className="title">Vision</h1>
          </div>
          <p className="payment-subtext">
            A smarter, faster, and more empowered way to create wealth in the
            digital era.
          </p>
        </div>

        <div className="vision-grid">
          {/* 01 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">01</div>
            <h3 className="vision-heading">Intelligent Wealth Ecosystem</h3>
            <p className="vision-desc">
              GO Ai is building a unified wealth ecosystem where automation,
              intelligence, and human decision-making work together seamlessly.
              Our vision is to provide individuals with institutional-grade
              tools that analyze markets, predict opportunities, and optimize
              outcomes automatically. By simplifying complex financial
              processes, we empower people to navigate wealth creation with
              absolute clarity and confidence—regardless of their background or
              experience level.
            </p>
          </div>

          {/* 02 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">02</div>
            <h3 className="vision-heading">Breaking Barriers</h3>
            <p className="vision-desc">
              The future of wealth should not be restricted by geography,
              education, or access to traditional financial systems. GO Ai
              breaks these limitations by delivering real-time analytics,
              scalable automation, and a globally connected infrastructure. We
              are removing outdated barriers and opening pathways for
              individuals to participate in advanced wealth-building
              opportunities that were previously reserved for large
              institutions.
            </p>
          </div>

          {/* 03 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">03</div>
            <h3 className="vision-heading">Empowered Decisions</h3>
            <p className="vision-desc">
              Every individual deserves the ability to make confident,
              high-quality financial decisions. Our systems replace guesswork
              with data-driven guidance, predictive intelligence, and automated
              execution. We aim to create an environment where members can act
              quickly, adapt intelligently, and move with precision—turning
              uncertainty into opportunity and transforming decision-making into
              a strategic advantage.
            </p>
          </div>

          {/* 04 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">04</div>
            <h3 className="vision-heading">Key Driving Questions</h3>
            <p className="vision-desc">
              GO Ai is built around the questions that shape long-term success:
              What are you capable of mastering? What drives your ambition? What
              opportunities can fuel your financial growth? Our technology helps
              members discover their strongest direction, identify their
              highest-value opportunities, and scale their wealth through
              intelligent automation and actionable insights.
            </p>
          </div>

          {/* 05 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">05</div>
            <h3 className="vision-heading">Clarity Over Illusion</h3>
            <p className="vision-desc">
              In a world filled with misleading promises, GO Ai stands for
              authenticity. We do not sell illusions—we deliver systems designed
              for measurable results. Our focus is on real performance, real
              insights, and real outcomes. By removing noise and providing
              clarity, we help individuals build a sustainable foundation for
              long-term financial growth and personal advancement.
            </p>
          </div>

          {/* 06 */}
          <div className="vision-box" data-aos="fade-up">
            <div className="vision-number color">06</div>
            <h3 className="vision-heading">Rising Beyond Failure</h3>
            <p className="vision-desc">
              Failure is not a stopping point—it is a valuable lesson in the
              journey toward success. GO Ai equips members with tools that
              accelerate recovery, identify improvements, and transform setbacks
              into growth. With intelligent monitoring, automated insights, and
              strategic guidance, we help individuals rise stronger, think
              sharper, and continue moving forward with resilience and
              confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
