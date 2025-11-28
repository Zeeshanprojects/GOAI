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
  
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContinue = () => {
    if (
      !form.firstname ||
      !form.lastname ||
      !form.dob ||
      !form.username ||
      !form.password ||
      !form.address1 ||
      !form.city ||
      !form.email ||
      !form.phone 
     
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
    document.title = "Userdetails | GO AI ";
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
        {/* FIRST NAME */}
        <div className="details-field">
          <label className="details-label">First Name *</label>
          <input
            name="firstname"
            onChange={handleChange}
            placeholder="e.g., John"
            className="details-input"
          />
        </div>

        {/* LAST NAME */}
        <div className="details-field">
          <label className="details-label">Last Name *</label>
          <input
            name="lastname"
            onChange={handleChange}
            placeholder="e.g., Doe"
            className="details-input"
          />
        </div>

        {/* DOB */}
        <div className="details-field">
          <label className="details-label">Date of Birth *</label>
          <input
            name="dob"
            onChange={handleChange}
            type="date"
            className="details-input"
          />
        </div>

        {/* GENDER */}
      </div>

      {/* ACCOUNT INFO */}
      <h3 className="details-section-heading">Account Information</h3>
      <div className="details-grid">
        <div className="details-field">
          <label className="details-label">Username *</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="e.g., johndoe"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Website (Optional)</label>
          <input
            name="website"
            onChange={handleChange}
            placeholder="e.g., https://yourwebsite.com"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Password *</label>
          <input
            name="password"
            onChange={handleChange}
            placeholder="Enter a strong password"
            type="password"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Confirm Password *</label>
          <input
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Re-enter your password"
            type="password"
            className="details-input"
          />
        </div>
      </div>

      {/* MAILING ADDRESS */}
      <h3 className="details-section-heading">Mailing Address</h3>
      <div className="details-grid">
        <div className="details-field">
          <label className="details-label">Address Line 1 *</label>
          <input
            name="address1"
            onChange={handleChange}
            placeholder="e.g., 221B Baker Street"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Address Line 2</label>
          <input
            name="address2"
            onChange={handleChange}
            placeholder="Apartment, Suite, etc."
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">ZIP Code</label>
          <input
            name="zip"
            onChange={handleChange}
            placeholder="e.g., 75001"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">City *</label>
          <input
            name="city"
            onChange={handleChange}
            placeholder="e.g., New York"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">State</label>
          <input
            name="state"
            onChange={handleChange}
            placeholder="e.g., California"
            className="details-input"
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <h3 className="details-section-heading">Contact Information</h3>
      <div className="details-grid">
        <div className="details-field">
          <label className="details-label">Primary Phone Number *</label>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="e.g., +1 555 123 4567"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Mobile Number</label>
          <input
            name="mobile"
            onChange={handleChange}
            placeholder="e.g., +1 555 987 6543"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Email Address *</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="e.g., john@example.com"
            className="details-input"
          />
        </div>

        <div className="details-field">
          <label className="details-label">Confirm Email Address *</label>
          <input
            name="confirmEmail"
            onChange={handleChange}
            placeholder="Re-enter your email"
            className="details-input"
          />
        </div>
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
