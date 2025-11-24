import { useEffect } from "react";
import Images from "../assets/Images/Image";
import "aos/dist/aos.css";
import "./Payment.css";

export default function Payment() {


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
      price: "$1200",
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
  <section className="pricing-section mt-5">
        {/* Heading + Description */}
        <div className="pricing-header" data-aos="fade-up">
          <h1 className="title">Membership</h1>
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

              <button className="select-btn">SELECT</button>
            </div>
          ))}
        </div>
      </section>
 </>
  );
}
