import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Payment.css";

export default function Payment() {
      useEffect(() => {
        document.title = "Payment | GOAI";
        AOS.init({
          duration: 1200,
          offset: 120,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">

          {/* CHOICE CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4" data-aos="fade-up">
            <div className="payment-card">
              <h5>Choice</h5>
<hr/>
              <p className="price">
                Monthly Membership <br />
                <strong>$99.99 USD</strong>
                <br />
                + $99.99 one-time fee
              </p>
<hr/>
              <ul className="features">
                <li>University</li>
                <li>learnLIVE</li>
                <li>MONEYpro</li>
                <li>MARKETpro</li>
                <li>FOREXthrive – includes FX Delta, FX Essentials, and more!</li>
              </ul>
            </div>
          </div>

          {/* SELECT CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"data-aos="fade-up">
            <div className="payment-card">
              <h5>Select</h5>
<hr/>
              <p className="price">
                Monthly Membership <br />
                <strong>$99.99 USD</strong>
                <br />
                + $174.99 one-time fee
              </p>
<hr/>
              <ul className="features">
                <li>Everything in Choice, plus:</li>
                <li>CRYPTOcore – includes Crypto Talk, Crypto Surge, and more!</li>
              </ul>
            </div>
          </div>

          {/* PREMIUM CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"data-aos="fade-up">
            <div className="payment-card">
              <h5>Premium</h5>
<hr/>
              <p className="price">
                Monthly Membership <br />
                <strong>$174.99 USD</strong>
                <br />
                + $599.99 one-time fee
              </p>
<hr/>
              <ul className="features">
                <li>Everything in Select, plus:</li>
                <li>EQUITYprime – includes Trend Pro, Options Pro, and more!</li>
              </ul>
            </div>
          </div>

          {/* ELITE CARD */}
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4"data-aos="fade-up">
            <div className="payment-card elite-card">
              <h5>Elite</h5>
<hr/>
              <p className="price">
                Monthly Membership <br />
                <strong>$174.99 USD</strong>
                <br />
                + $1499.99 one-time fee
              </p>
<hr/>
              <ul className="features">
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
