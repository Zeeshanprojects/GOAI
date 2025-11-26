import { useEffect, useState, useMemo, useContext } from "react";

import Images from "../assets/Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Membership.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../Components/FormContext";
import "flag-icons/css/flag-icons.min.css";

function MembershipModal({ isOpen, onClose, selectedPlan }) {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);
const [loading, setLoading] = useState(false);
  const [countryOption, setCountryOption] = useState(null);
  const [languageOption, setLanguageOption] = useState(null);

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
    borderColor: "hsla(0,0%,100%, 0.2)",
    minHeight: "44px",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),

  placeholder: (base) => ({
    ...base,
    color: "rgba(255,255,255,0.7)",
  }),

  // 🔥 SCROLLBAR ADDED
  menu: (base) => ({
    ...base,
    backgroundColor: "#2c1a44",
    maxHeight: "120px",     // dropdown height limit
    overflow: "hidden",
  }),

  menuList: (base) => ({
    ...base,
    maxHeight: "120px",
    overflowY: "auto",      // scrolling enabled
    paddingRight: "6px",    // prevents content shifting
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#3b215f" : "#2c1a44",
    color: "#fff",
    cursor: "pointer",
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
      .startsWith(rawInput.toLowerCase());
  };

  const handleNext = () => {
  if (!countryOption || !languageOption) {
    alert("Please select both country and language.");
    return;
  }

  // Show loader
  setLoading(true);

  // Save data globally
  setFormData((prev) => ({
    ...prev,
    country: countryOption.rawLabel,
    language: languageOption.value,
    plan: selectedPlan?.title,
  }));

  // Wait before navigation to show loader smoothly
  setTimeout(() => {
    navigate("/userdetails");
  }, 800); // smooth delay
};


  return (
       <>
 {isOpen && (
  <div className="membership-modal-overlay">
    <div className="membership-modal-1">

      {/* LOADER OVERLAY INSIDE MODAL */}
      {loading && (
        <div className="modal-loader-overlay">
          <div className="loader"></div>
          <p className="loader-text">Processing...</p>
        </div>
      )}

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
          cancel
        </button>

        <button className="modal-btn next" onClick={handleNext}>
          NEXT
        </button>
      </div>
    </div>
  </div>
)}   </>
  );
}

export default function Membership() {
  useEffect(() => {
    document.title = "Membership | GOAI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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
      <div className="space"></div>

      <section className="pricing-section mt-5">
        <div data-aos="fade-up">
          <div className="pricing-header">
            <h1 className="title">Your Journey, Your Plan.</h1>
          </div>
          <p className="payment-subtext">
            Pick the membership built for your goals. More learning, more tools,
            more power your choice.
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
      <MembershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
