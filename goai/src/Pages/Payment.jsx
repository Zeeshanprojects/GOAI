import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import "./Payment.css";

export default function Payment() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.title = "Payment | GOAI";
  }, []);

  // Function to toggle selection
  const handleSelect = (plan) => {
    setSelected(selected === plan ? null : plan);
  };

  return (
    <>
      <div className="space"></div>

      <div className="container">
        <div className="row justify-content-center mt-3">

          {/* CHOICE CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <div
              className={`payment-card hover-card ${selected === "choice" ? "active-card" : ""}`}
              onClick={() => handleSelect("choice")}
            >
              <div className="popular-tag">Most Popular</div>

              <div className="title-row">
                <h4>Choice</h4>

                <input
                  type="checkbox"
                  checked={selected === "choice"}
                  onChange={() => handleSelect("choice")}
                  className="radio-right"
                />
              </div>

              <hr />

              <p className="payment">
                Monthly Membership <br />
                <strong>$99.99 USD</strong>
                <br />+ $99.99 one-time fee
              </p>

              <hr />

              <ul className="payment-features">
                <li>University</li>
                <li>learnLIVE</li>
                <li>MONEYpro</li>
                <li>MARKETpro</li>
                <li>FOREXthrive – includes FX Delta, FX Essentials, and more!</li>
              </ul>
            </div>
          </div>

          {/* SELECT CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <div
              className={`payment-card hover-card ${selected === "select" ? "active-card" : ""}`}
              onClick={() => handleSelect("select")}
            >
              <div className="popular-tag">Most Popular</div>

              <div className="title-row">
                <h4>Select</h4>

                <input
                  type="checkbox"
                  checked={selected === "select"}
                  onChange={() => handleSelect("select")}
                  className="radio-right"
                />
              </div>

              <hr />

              <p className="payment">
                Monthly Membership <br />
                <strong>$99.99 USD</strong>
                <br />+ $174.99 one-time fee
              </p>

              <hr />

              <ul className="payment-features">
                <li>Everything in Choice, plus:</li>
                <li>CRYPTOcore – includes Crypto Talk, Crypto Surge, and more!</li>
              </ul>
            </div>
          </div>

          {/* PREMIUM CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <div
              className={`payment-card hover-card ${selected === "premium" ? "active-card" : ""}`}
              onClick={() => handleSelect("premium")}
            >
              <div className="popular-tag">Most Popular</div>

              <div className="title-row">
                <h4>Premium</h4>

                <input
                  type="checkbox"
                  checked={selected === "premium"}
                  onChange={() => handleSelect("premium")}
                  className="radio-right"
                />
              </div>

              <hr />

              <p className="payment">
                Monthly Membership <br />
                <strong>$174.99 USD</strong>
                <br />+ $599.99 one-time fee
              </p>

              <hr />

              <ul className="payment-features">
                <li>Everything in Select, plus:</li>
                <li>EQUITYprime – includes Trend Pro, Options Pro, and more!</li>
              </ul>
            </div>
          </div>

          {/* ELITE CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <div
              className={`payment-card hover-card ${selected === "elite" ? "active-card" : ""}`}
              onClick={() => handleSelect("elite")}
            >
              <div className="popular-tag">Most Popular</div>

              <div className="title-row">
                <h4>Elite</h4>

                <input
                  type="checkbox"
                  checked={selected === "elite"}
                  onChange={() => handleSelect("elite")}
                  className="radio-right"
                />
              </div>

              <hr />

              <p className="payment">
                Monthly Membership <br />
                <strong>$174.99 USD</strong>
                <br />+ $1499.99 one-time fee
              </p>

              <hr />

              <ul className="payment-features">
                <li>Everything in Premium, plus:</li>
                <li>ALPHAtrader</li>
                <li>Elite Advantage</li>
                <li>CRYPTOelite powered by Endotech</li>
                <li>Elite exclusive channels</li>
                <li>Discounts on various products and services</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
