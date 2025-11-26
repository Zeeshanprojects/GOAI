import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Userdetails.css";

import { FormContext } from "../Components/FormContext.jsx";

export default function Userdetails() {
  const { setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  };

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    username: "",
    website: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    phone: "",
    mobile: "",
    email: "",
    confirmEmail: "",
    cardName: "",
    expiry: "",
    cvv: "",
    cardNumber: "",
    subscription: false,
    refundpolicy: false,
    ageConfirmed: false,
    termsAccepted: false,
  });
  const handleExpiryMonth = (e) => {
    const value = e.target.value; // Example: "2025-08"

    if (!value) return;

    const [year, month] = value.split("-");

    // Convert "2025-08" → 08/25
    const formatted = `${month}/${year.slice(2)}`;

    setForm((prev) => ({
      ...prev,
      expiry: formatted,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContinue = () => {
    // REQUIRED FIELDS
    if (
      !form.firstname ||
      !form.lastname ||
      !form.dob ||
      !form.username ||
      !form.password ||
      !form.address1 ||
      !form.city ||
      !form.email ||
      !form.phone ||
      !form.ageConfirmed ||
      !form.termsAccepted ||
      !form.cardName ||
      !form.cardNumber ||
      !form.cvv
    ) {
      showError("Please fill all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showError("Passwords do not match!");
      return;
    }

    if (form.email !== form.confirmEmail) {
      showError("Emails do not match!");
      return;
    }

    // Save All Data
    setFormData((prev) => ({
      ...prev,
      ...form,
    }));

    navigate("/checkout");
  };

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 120, once: true });
  }, []);

  return (
    <section className="details-container">
      {/* ERROR POPUP */}
      {error && <div className="error-popup">{error}</div>}

      <h1 className="title">Your Account Information</h1>

      {/* PERSONAL INFO */}
      <h3 className="details-section-heading">Personal Information</h3>
      <div className="details-grid">
        <input
          name="firstname"
          onChange={handleChange}
          placeholder="First Name *"
          className="details-input"
        />
        <input
          name="lastname"
          onChange={handleChange}
          placeholder="Last Name *"
          className="details-input"
        />

        {/* DOB CALENDAR */}
        <input
          name="dob"
          onChange={handleChange}
          type="date"
          className="details-input"
          placeholder="Date of Birth *"
        />
      </div>

      {/* ACCOUNT INFO */}
      <h3 className="details-section-heading">Account Information</h3>
      <div className="details-grid">
        <input
          name="username"
          onChange={handleChange}
          placeholder="Username *"
          className="details-input"
        />
        <input
          name="website"
          onChange={handleChange}
          placeholder="Your Website URL"
          className="details-input"
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Choose Your Password *"
          className="details-input"
          type="password"
        />
        <input
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Your Password *"
          className="details-input"
          type="password"
        />
      </div>

      {/* MAILING ADDRESS */}
      <h3 className="details-section-heading">Mailing Address</h3>
      <div className="details-grid">
        <input
          name="address1"
          onChange={handleChange}
          placeholder="Address Line 1 *"
          className="details-input"
        />
        <input
          name="address2"
          onChange={handleChange}
          placeholder="Address Line 2"
          className="details-input"
        />
        <input
          name="zip"
          onChange={handleChange}
          placeholder="ZIP Code"
          className="details-input"
        />
        <input
          name="city"
          onChange={handleChange}
          placeholder="City *"
          className="details-input"
        />
        <input
          name="state"
          onChange={handleChange}
          placeholder="State"
          className="details-input"
        />
      </div>

      {/* CONTACT INFO */}
      <h3 className="details-section-heading">Contact Information</h3>
      <div className="details-grid">
        <input
          name="phone"
          onChange={handleChange}
          placeholder="Primary Phone Number *"
          className="details-input"
        />
        <input
          name="mobile"
          onChange={handleChange}
          placeholder="Mobile Number"
          className="details-input"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email Address *"
          className="details-input"
        />
        <input
          name="confirmEmail"
          onChange={handleChange}
          placeholder="Confirm Email Address *"
          className="details-input"
        />
      </div>

      {/* CARD INFO */}
      <h3 className="details-section-heading">Credit Card Information</h3>

      <div className="details-grid">
        {/* Cardholder Name */}
        <input
          name="cardName"
          onChange={handleChange}
          placeholder="Name on Card *"
          className="details-input"
        />
        <input
          name="cardNumber"
          onChange={handleChange}
          placeholder="Card Number (1234 5678 9012 3456) *"
          className="details-input"
          maxLength="19"
        />

        {/* CVV */}
        <input
          name="cvv"
          onChange={handleChange}
          placeholder="CVV (3 or 4 digits) *"
          className="details-input"
          maxLength="4"
        />

        {/* ZIP Code (optional) */}
        <input
          name="zip"
          onChange={handleChange}
          placeholder="Billing ZIP / Postal Code"
          className="details-input"
        />
      </div>

      <div className="details-checkbox-container">
        <label className="details-checkbox">
          <input type="checkbox" name="ageConfirmed" onChange={handleChange} />
          <span>I am above 18 years old *</span>
        </label>

        <label className="details-checkbox">
          <input type="checkbox" name="subscription" onChange={handleChange} />
          <span>I understand this is a subscription *</span>
        </label>

        <label className="details-checkbox">
          <input type="checkbox" name="termsAccepted" onChange={handleChange} />
          <span>
            I agree to the
            <Link to="/termandconditions"> Terms & Conditions *</Link>
          </span>
        </label>

        <label className="details-checkbox">
          <input type="checkbox" name="refundpolicy" onChange={handleChange} />
          <span>
            I agree to the{" "}
            <Link
              to="/refundpolicy"
            
            >
              refund policy
            </Link>{" "}
            *
          </span>
        </label>
      </div>

      <div className="details-buttons">
        <button className="details-btn back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="details-btn continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </section>
  );
}
