import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Images from "../assets/Images/Image";
export default function Footer() {
  return (
    <>
      <>
        <>
          {/* Remove the container if you want to extend the Footer to full width. */}
          <div className="container-fluid p-0 ">
            {/* Footer */}
            <footer
              className="text-center text-lg-start text-white"
              style={{ backgroundColor: "#1c2331" }}
            >
              <section className="d-flex justify-content-between "></section>

              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-6 col-xl-6 mx-auto mb-4">
                      {/* Content */}

                      <img
                        src={Images.logo}
                        alt="logo"
                        height={50}
                        width={100}
                      />

                      <p className="mt-3">
                        GO AI exists to merge financial education, trading
                        technology, and human potential into a single ecosystem
                        of empowerment...
                      </p>
                      <div>
                        <Link
                          to="https://www.facebook.com/profile.php?id=61583860222236"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                          to="https://www.instagram.com/goai.global/"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link
                          to="https://x.com/GOAI_GLOBAL"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link
                          to="https://www.linkedin.com/in/go-ai-global-258758398/"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link
                          to="http://www.youtube.com/@GOAIGLOBAL"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-youtube" />
                        </Link>

                        <Link
                          to="https://www.tiktok.com/@goai.global"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>

                        <Link
                          to="https://t.me/GOAIGLOBAL"
                          className="text-white me-4"
                          target="_blank"
                        >
                          <i className="fab fa-telegram" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                        <Link to="/vision" className="text-white">
                          Vision
                        </Link>
                      </p>
                      <p>
                        <Link to="/platform" className="text-white">
                          Platform
                        </Link>
                      </p>
                      <p>
                        <Link to="/membership" className="text-white">
                          Membership
                        </Link>
                      </p>

                      <p>
                        <Link to="/Contact" className="text-white">
                          Contact
                        </Link>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                        <i className="fas fa-home mr-3" /> GO AI, LLC 30 N Gould
                        St. #57397 Sheridan, WY, 82801
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3" /> info@goai.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3" /> + 01 234 567 88
                      </p>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
              </section>
              {/* Section: Links  */}
              {/* Copyright */}
             {/* FOOTER POLICY LINKS */}
<div className="footer-links text-center py-3">
  <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
  <Link to="/termandconditions" className="footer-link">Terms & Conditions</Link>
  <Link to="/refundpolicy" className="footer-link">Refund/Cancellation Policy</Link>
  <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
  <Link to="/policies-procedures" className="footer-link">Policies & Procedures</Link>
  <Link to="/ca-residents" className="footer-link">CA Residents</Link>
</div>

{/* COPYRIGHT */}
<div
  className="text-center p-3"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
>
  © 2025&nbsp;
  <a className="text-white" href="https://mdbootstrap.com/">
    GO AI, LLC
  </a>
</div>

              {/* Copyright */}
            </footer>
            {/* Footer */}
          </div>
        </>
      </>
    </>
  );
}
