import React, { useEffect, useState } from "react";
import "./Carddetails.css";

export default function Carddetails() {
  const [method, setMethod] = useState("card");
  useEffect(() => {
    document.title = "Card Details | GO AI";
  });
  return (
    <section className="payment-container">
      <h1 className="title mb-3">Payment</h1>

      {/* PAYMENT METHODS */}
      <div className="payment-methods">
        {/* CREDIT/DEBIT CARD */}
        <label className="radio-option">
          <input
            type="radio"
            name="payment"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <span>Credit / Debit Card</span>
        </label>

        {method === "card" && (
          <div className="card-box">
            <p className="secure-text">🔒 Secure, fast checkout</p>

            <div className="card-grid">
              <div className="card-field">
                <label>Card number</label>
                <input type="text" placeholder="1234 1234 1234 1234" />
              </div>

              <div className="card-field">
                <label>Expiration date</label>
                <input type="text" placeholder="MM / YY" />
              </div>

              <div className="card-field">
                <label>Security code</label>
                <input type="text" placeholder="CVC" />
              </div>
            </div>

            <p className="terms-note">
              By providing your card information, you authorize GO AI to charge
              your card for future subscription payments.
            </p>
          </div>
        )}

        {/* OTHER OPTIONS */}
       

        <label className="radio-option">
          <input
            type="radio"
            name="payment"
            onChange={() => setMethod("bank")}
          />
          <span>Bank Wire Transfer</span>
        </label>

        <label className="radio-option">
          <input
            type="radio"
            name="payment"
            onChange={() => setMethod("tygapay")}
          />
          <span>TygaPay</span>
        </label>
      </div>

      {/* CHECKBOX SECTION */}
      <div className="policy-section">
        <h3 className="policy-title">
          The Company will send automated emails to remind you of upcoming
          subscription payments before they are due.
        </h3>

        <p className="policy-text">
          Your personal data will be used to process your order and support your
          experience. Read our <span className="link">privacy policy</span>.
        </p>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>I have read and agree to the website refund policy *</span>
        </label>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>I confirm that this is a recurring subscription. *</span>
        </label>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>I want to receive updates about products and promotions.</span>
        </label>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>I confirm that I am 18 years old or over. *</span>
        </label>
      </div>

      {/* BUTTON */}
      <div className="order-btn-wrapper">
        <button className="place-order-btn">Place Order</button>
      </div>
    </section>
  );
}
