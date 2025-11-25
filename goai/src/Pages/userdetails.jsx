import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Userdetails.css";

export default function Userdetails() {
  useEffect(() => {
    document.title = "User Details | GOAI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="details-container" data-aos="fade-up">
        <h1 className="title">Your Account Information</h1>

        {/* MAILING ADDRESS */}
        <h3 className="details-section-heading">Mailing Address</h3>
        <div className="details-grid">
          <input type="text" placeholder="Address Line 1" className="details-input" />
          <input type="text" placeholder="Address Line 2" className="details-input" />
          <input type="text" placeholder="Address Line 3" className="details-input" />
          <input type="text" placeholder="ZIP Code" className="details-input" />
          <input type="text" placeholder="City" className="details-input" />
          <input type="text" placeholder="State" className="details-input" />
        </div>

        {/* CONTACT INFO */}
        <h3 className="details-section-heading">Contact Information</h3>
        <div className="details-grid">
          <input type="text" placeholder="Primary Phone Number" className="details-input" />
          <input type="text" placeholder="Mobile Number" className="details-input" />
          <input type="email" placeholder="Email Address" className="details-input" />
          <input type="email" placeholder="Confirm Email Address" className="details-input" />
        </div>

        {/* ACCOUNT INFO */}
        <h3 className="details-section-heading">Your Account Information</h3>
        <div className="details-grid">
          <input type="text" placeholder="Username" className="details-input" />
          <input type="text" placeholder="Your Website URL: ignius.biz" className="details-input" />
          <input type="password" placeholder="Choose Your Password" className="details-input" />
          <input type="password" placeholder="Confirm Your Password" className="details-input" />
        </div>

        {/* CHECKBOXES */}
        <div className="details-checkboxes">
          <label className="details-checkbox">
            <input type="checkbox" />
            <span>I am above 18 years old</span>
          </label>

          <label className="details-checkbox">
            <input type="checkbox" />
            <span>I agree to the Terms & Conditions</span>
          </label>
        </div>

        {/* ACTION BUTTONS */}
        <div className="details-buttons">
          <button className="details-btn back-btn">Back</button>
          <button className="details-btn continue-btn">Continue</button>
        </div>
      </section>
    </>
  );
}
