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
                        GO Ai exists to merge financial education, trading
                        technology, and human potential into a single ecosystem
                        of empowerment...
                      </p>
                      <div>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-google" />
                        </a>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-linkedin" />
                        </a>
                        <a href="" className="text-white me-4">
                          <i className="fab fa-github" />
                        </a>
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
                        <a href="#!" className="text-white">
                          Vision
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Platform
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Membership
                        </a>
                      </p>

                      <p>
                        <a href="#!" className="text-white">
                          Contact
                        </a>
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
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
                        <i className="fas fa-home mr-3" /> New York, NY 10012,
                        US
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
              <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                © 2025&nbsp;
                <a className="text-white" href="https://mdbootstrap.com/">
                  GOAI
                </a>
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </div>
          {/* End of .container */}
        </>
      </>
    </>
  );
}
