import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function Contact() {
      useEffect(() => {
        document.title = "Contact | GOAI";
        AOS.init({
          duration: 1200,
          offset: 120,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
  return (
    <>
    <section className="contact-container">
              <div data-aos="fade-up">
        <div className="pricing-header">
          <h1 className="title">Contact</h1>
        </div>
        <p className="payment-subtext">
          A smarter, faster, and more empowered way to create wealth in the
          digital era.
        </p>
      </div>

      <section className="contact-section" data-aos="fade-up">

        {/* LEFT COLUMN */}
        <div className="contact-left">
          <h1 className="contact-heading">Let’s Get in Touch</h1>
          <p className="contact-description">
            Have questions, need support, or want to connect with our team?
            We’re here to help you every step of the way.
          </p>

          <div className="contact-info">
              <div className="contact-item">
              <i className="fa-solid fa-home contact-icon"></i>
             <span>New York, NY 10012, US</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope contact-icon"></i>
              <span>support@goai.com</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-phone contact-icon"></i>
              <span>+1 234 567 890</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (FORM) */}
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

      </section>
    </section>

    </>
  );
}
