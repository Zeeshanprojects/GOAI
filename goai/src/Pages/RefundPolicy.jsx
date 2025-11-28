import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund Policy | GO AI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <section className="terms-section container-fluid">
        <div className="container terms-wrapper" data-aos="fade-up">
          {/* PAGE HEADER */}
          <div className="text-center">
            <h1 className="title">GO AI, LLC Refund Policy</h1>
            <p className="text-white">
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="terms-content text-white">
            <h3 className="terms-heading mt-5">Summary</h3>
            <ul>
              <li>
                <p>
                  You have 7 calendar days from the date of purchase to request
                  a refund on eligible products.
                </p>
              </li>
              <li>
                <p>
                  Payments made in cryptocurrency are non-refundable in all
                  cases.
                </p>
              </li>
              <li>
                <p>
                  Renewals are generally non-refundable, but you can cancel to
                  prevent future charges.
                </p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">What’s Eligible</h3>
            <p>We may issue a refund within 7 days of purchase for:</p>
            <ul>
              <li>
                <p>
                  First-time purchases of GO AI digital products (e.g.,
                  education content, software subscriptions, and services) that
                  have not been substantially used (e.g., no significant course
                  completion, excessive downloads, or extended software usage).
                </p>
              </li>
              <li>
                <p>Accidental duplicate charges of the same product.</p>
              </li>
            </ul>
            <p>
              <strong>Note:</strong> “7 days” means 7 consecutive calendar days
              starting on the day of purchase.
            </p>
            <h3 className="terms-heading mt-5">Not Eligible</h3>
            <p>We do not provide refunds for:</p>
            <ul>
              <li>
                <p>Any purchase paid with cryptocurrency.</p>
              </li>
              <li>
                <p>
                  Subscription renewals (past charges are final; cancel anytime
                  to stop future billing).
                </p>
              </li>
              <li>
                <p>
                  Discounted, promotional, or trial-converted plans after the
                  trial ends and billing starts.
                </p>
              </li>
              <li>
                <p>“No-show” or missed scheduled sessions/services.</p>
              </li>
              <li>
                <p>
                  Accounts found in violation of our Terms of Use or fair-use
                  policies.
                </p>
              </li>
              <li>
                <p>Requests submitted after the 7-day window</p>
              </li>
            </ul>
            <h3 className="terms-heading mt-5">How to Request a Refund</h3>
            <ul>
              <li>
                Email<strong>support@goai.global</strong> from the account used
                to purchase.
              </li>
              <li>
                Include your full name, order number, purchase date, product
                name, and reason for the request.
              </li>
              <li>
                We may ask you to complete an attestation regarding usage (e.g.,
                course progress, software activity).
              </li>
              <li>
                  <p>
                Our team will review eligibility and respond via email. If
                approved, refunds are issued to the original payment method
                (except crypto, which is not refundable). Depending on your bank
                or card issuer, it can take 5–10 business days to appear on your
                statement.
              </p>
              </li>
            
              <li>Requests submitted after the 7-day window.</li>
            </ul>
            <h3 className="terms-heading mt-5">Cancellations</h3>
            <p>
              You can cancel subscriptions at any time to prevent future
              charges. Cancellation takes effect at the end of the current
              billing period; no partial, prorated, or mid-cycle refunds are
              provided (except where required by law).
            </p>

            <h3 className="terms-heading mt-5">Chargebacks & Disputes</h3>
            <p>
              Please contact us first to resolve any issues. Filing a chargeback
              without first working with us may result in immediate account
              suspension and termination of access and affiliate/partner
              privileges, where applicable. We will report chargebacks to the
              financial institutions as “friendly fraud” and may result in a
              strike on your credit report. Please adhere to the refund process.{" "}
            </p>
            <h3 className="terms-heading mt-5">Fraud & Abuse</h3>
            <p>
              We reserve the right to refuse a refund if we suspect fraud,
              refund abuse, or violations of our Terms of Use.
            </p>
            <h3>Legal</h3>
            <p>
              Nothing in this policy limits any non-waivable consumer rights
              available to you under applicable law. GO AI may update this
              policy from time to time; the latest version will apply to new
              purchases after the effective date
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
