import { useEffect, useState,useMemo } from "react";

import Images from "../assets/Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Payment.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";

import "flag-icons/css/flag-icons.min.css";


function MembershipModal({ isOpen, onClose, selectedPlan }) {
  const navigate = useNavigate();

  const [countryOption, setCountryOption] = useState(null);
  const [languageOption, setLanguageOption] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const countryOptions = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
        flagClass: `fi fi-${country.value.toLowerCase()}`,
        rawLabel: country.label,
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
    input: (base) => ({
      ...base,
      color: "#ffffff",
    }),
  };

  const filterCountries = (option, rawInput) => {
    if (!rawInput) return true;
    return option.data.rawLabel
      .toLowerCase()
      .startsWith(rawInput.trim().toLowerCase());
  };

  const handleNext = () => {
    if (!countryOption || !languageOption) {
      alert("Please select both country and language.");
      return;
    }
    setShowFormModal(true);
  };

  const handleBack = () => {
    setShowFormModal(false);
  };

  const handleContinue = () => {
    navigate("/payment", {
      state: {
        plan: selectedPlan,
        country: countryOption.rawLabel,
        language: languageOption.value,
      },
    });
  };

  const resetAllFields = () => {
    setCountryOption(null);
    setLanguageOption(null);
    setShowFormModal(false);
  };

  return (
    <>
      {/* FIRST MODAL */}
      {isOpen && !showFormModal && (
        <div className="membership-modal-overlay">
          <div className="membership-modal-1">
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
                    <span className={option.flagClass}></span>
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
              <button
                className="modal-btn cancel"
                onClick={() => {
                  resetAllFields();
                  onClose();
                }}
              >
                Cancel
              </button>

              <button className="modal-btn next" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECOND MODAL */}
      {showFormModal && (
        <div className="membership-modal-overlay">
          <div className="membership-modal-2">
            <h2 className="modal-title">Your Account Information</h2>

            <h3 className="modal-section-title">Mailing Address</h3>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="Address Line 1" />
              <input className="modal-input" type="text" placeholder="Address Line 2" />
            </div>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="Address Line 3" />
              <input className="modal-input" type="text" placeholder="ZIP Code" />
            </div>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="City" />
              <input className="modal-input" type="text" placeholder="State" />
            </div>

            <h3 className="modal-section-title">Contact Information</h3>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="Primary Phone Number" />
              <input className="modal-input" type="text" placeholder="Mobile Number" />
            </div>

            <div className="modal-two-columns">
              <input className="modal-input" type="email" placeholder="Email Address" />
              <input className="modal-input" type="email" placeholder="Confirm Email Address" />
            </div>

            <h3 className="modal-section-title">Your Account Information</h3>

            <div className="modal-two-columns">
              <input className="modal-input" type="text" placeholder="Username" />
              <input className="modal-input" type="text" placeholder="Your Website URL: GOAI.Org" />
            </div>

            <div className="modal-two-columns">
              <input className="modal-input" type="password" placeholder="Choose Your Password" />
              <input className="modal-input" type="password" placeholder="Confirm Your Password" />
            </div>

          <div className="modal-checkbox-group">
                <label className="modal-checkbox">
                  <input type="checkbox" />
                  <span>I am 18 years old</span>
                </label>

                <label className="modal-checkbox">
                  <input type="checkbox" />
                  <span>I agree to the Terms & Conditions</span>
                </label>
              
            </div>

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

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    document.title = "Payment | GOAI";
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
      price: "$1000",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares"],
      orb: "/orb3.png",
    },
    {
      image: Images.icon3,
      title: "Go Complete",
      price: "$1700",
      fee: "Initial Fee",
      features: ["More Education", "More Alerts", "More Softwares", "VIP", "Automations"],
      orb: "/orb4.png",
    },
  ];

  return (
    <>
<div className="space"></div>

      <section className="pricing-section mt-5">
        <div data-aos="fade-up">
            <div className="pricing-header">
  <h1 className="title">Your Journey, Your Plan.</h1>
        </div>
 <p className="payment-subtext">
  Pick the membership built for your goals. More learning, more tools, more power—your choice.
</p>
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
                  setIsModalOpen(true);
                }}
              >
                SELECT
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* RENDER MODAL */}
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
