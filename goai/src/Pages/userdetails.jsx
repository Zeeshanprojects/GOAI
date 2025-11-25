import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Userdetails.css";

import { FormContext } from "../Components/FormContext.jsx";

export default function Userdetails() {
  const { setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
        username: "",
    website: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    address3: "",
    zip: "",
    city: "",
    state: "",
    phone: "",
    mobile: "",
    email: "",
    confirmEmail: "",

    ageConfirmed: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleContinue = () => {

  // REQUIRED FIELDS VALIDATION
  if (
    !form.address1 ||
    !form.city ||
    !form.email ||
    !form.password ||
    !form.username ||
    !form.phone ||
    !form.ageConfirmed||
    !form.termsAccepted
  ) {
    alert("Please fill all required fields.");
    return;
  }

  // OPTIONAL: Confirm password match
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // OPTIONAL: Confirm email match
  if (form.email !== form.confirmEmail) {
    alert("Emails do not match!");
    return;
  }

  // Save All Data
  setFormData(prev => ({
    ...prev,
    ...form
  }));

  // Go to checkout page
  navigate("/checkout");
};


  useEffect(() => {
    AOS.init({ duration: 1200, offset: 120, once: true });
  }, []);

  return (
    <>
      <section className="details-container">

        <h1 className="title">Your Account Information</h1>
 <h3 className="details-section-heading">Your Account Information</h3>
        <div className="details-grid">
          <input name="username" onChange={handleChange} placeholder="Username" className="details-input" required />
          <input name="website" onChange={handleChange} placeholder="Your Website URL" className="details-input" />
          <input name="password" onChange={handleChange} placeholder="Choose Your Password" className="details-input" type="password" />
          <input name="confirmPassword" onChange={handleChange} placeholder="Confirm Your Password" className="details-input" type="password" />
        </div>
        <h3 className="details-section-heading">Mailing Address</h3>

        
        <div className="details-grid">
          <input name="address1" onChange={handleChange} placeholder="Address Line 1" className="details-input" />
          <input name="address2" onChange={handleChange} placeholder="Address Line 2" className="details-input" />
          <input name="address3" onChange={handleChange} placeholder="Address Line 3" className="details-input" />
          <input name="zip" onChange={handleChange} placeholder="ZIP Code" className="details-input" />
          <input name="city" onChange={handleChange} placeholder="City" className="details-input" />
          <input name="state" onChange={handleChange} placeholder="State" className="details-input" />
        </div>

        <h3 className="details-section-heading">Contact Information</h3>
        <div className="details-grid">
          <input name="phone" onChange={handleChange} placeholder="Primary Phone Number" className="details-input" />
          <input name="mobile" onChange={handleChange} placeholder="Mobile Number" className="details-input" />
          <input name="email" onChange={handleChange} placeholder="Email Address" className="details-input" />
          <input name="confirmEmail" onChange={handleChange} placeholder="Confirm Email Address" className="details-input" />
        </div>

       

        <div className="details-checkboxes">
          <label className="details-checkbox">
            <input type="checkbox" name="ageConfirmed" onChange={handleChange} />
            <span>I am above 18 years old</span>
          </label>

          <label className="details-checkbox">
            <input type="checkbox" name="termsAccepted" onChange={handleChange} />
            <span>I agree to the Terms & Conditions</span>
          </label>
        </div>

        <div className="details-buttons">
          <button className="details-btn back-btn" onClick={() => navigate(-1)}>Back</button>
          <button className="details-btn continue-btn" onClick={handleContinue}>Continue</button>
        </div>

      </section>
    </>
  );
}
