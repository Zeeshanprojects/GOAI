import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Terms and Conditions | GOAI";
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
            <h1 className="title">Terms & Conditions</h1>
            <p className="payment-subtext ">
              Please review the following terms carefully. By purchasing or
              accessing GOAI services, you agree to comply with these
              conditions.
              <br />
              <span className="fw-bold">Last Updated: November 25, 2025</span>
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="terms-content text-white">
            You have 7 calendar days from the date of purchase to request a
            refund on eligible products. Payments made in cryptocurrency are
            non-refundable in all cases. Renewals are generally non-refundable,
            but you can cancel to prevent future charges.
            <h3 className="terms-heading mt-5">
What’s Eligible</h3>
            <p>
             We may issue a refund within 7 days of purchase for:
First-time purchases of GO AI digital products (e.g., education content, software subscriptions, and services) that have not been substantially used (e.g., no significant course completion, excessive downloads, or extended software usage).


            </p>
            <h3 className="terms-heading mt-5">Accidental duplicate charges of the same product.
</h3>
            <p>
              NO REFUNDS of initial purchases will be made, except when
              requested within seven (7) days of the initial purchase date by
              written notice to GO AI via email, ticket, or Live Chat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
