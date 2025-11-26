import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../Components/FormContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Checkout.css";

export default function Checkout() {
  useEffect(() => {
    document.title = "Checkout | GOAI";
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const { formData } = useContext(FormContext);

  return (
    <section className="checkout-container"  data-aos="fade-up">
      <h1 className="title">Checkout</h1>
      <div className="details-input" >
        <h3 className="checkout-heading">Selected Plan</h3>
        <p>Your Plan: {formData.plan}</p>
      </div>
      <div className="details-input mt-3">
        <h3 className="checkout-heading">Country & Language</h3>
        <p>Country: {formData.country}</p>
        <p>Language: {formData.language}</p>
      </div>

      <div className="details-input mt-3">
        <h3 className="checkout-heading">Personal Information</h3>
        <p>First Name: {formData.firstname}</p>
        <p>Last Name: {formData.lastname}</p>
        <p>DOB: {formData.dob}</p>
      </div>

      <div className="details-input mt-3">
        <h3 className="checkout-heading">Mailing Address</h3>
        <p>Address1: {formData.address1}</p>
        <p>Address2:{formData.address2}</p>
        <p>Address3:{formData.address3}</p>
        <p>City:{formData.city}</p>
        <p>State: {formData.state} </p> <p>Zip:{formData.zip}</p>
      </div>
      <div className="details-input mt-3">
        <h3 className="checkout-heading">Contact Info</h3>
        <p>Phone: {formData.phone}</p>
        <p>Mobile:{formData.mobile}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div className="details-input mt-3">
        <h3 className="checkout-heading">Account Info</h3>
        <p>Username: {formData.username}</p>
        <p>Website: {formData.website}</p>
      </div>

      <div className="details-input mt-3">
        <h3 className="checkout-heading">Credit Card Information</h3>
        <p>Card Name:{formData.cardName}</p>
        <p>Card Number:{formData.cardNumber}</p>
        <p>Card Name:{formData.cardName}</p>
        <p>Card Number:{formData.cardNumber}</p>
        <p></p>
      </div>

      <Link to="/carddetails">
        <button className="place-order-btn">Proceed</button>
      </Link>
    </section>
  );
}
