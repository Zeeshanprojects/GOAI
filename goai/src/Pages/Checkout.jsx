import { useContext } from "react";
import { FormContext } from "../Components/FormContext.jsx";
import "./Checkout.css"

export default function Checkout() {
  const { formData } = useContext(FormContext);

  return (
    <section className="checkout-container">
      <h1 className="title">Checkout</h1>

      <h3 className="checkout-heading">Selected Plan</h3>
      <p>Your Plan: {formData.plan}</p>


      <h3 className="checkout-heading">Country & Language</h3>
      <p>Country: {formData.country}</p>
      <p>Language: {formData.language}</p>
   <h3 className="checkout-heading">Personal Information</h3>
      <p>First Name: {formData.firstname}</p>
  <p>Last Name: {formData.lastname}</p>
    <p>DOB: {formData.dob}</p>
      <h3 className="checkout-heading">Mailing Address</h3>
      <p>Address1: {formData.address1}</p>
      <p>Address2:{formData.address2}</p>
      <p>Address3:{formData.address3}</p>
      <p>City:{formData.city}</p><p>State: {formData.state} </p> <p>Zip:{formData.zip}</p>

      <h3 className="checkout-heading">Contact Info</h3>
      <p>Phone: {formData.phone}</p>
      <p>Mobile:{formData.mobile}</p>
      <p>Email: {formData.email}</p>

      <h3 className="checkout-heading">Account Info</h3>
      <p>Username: {formData.username}</p>
      <p>Website: {formData.website}</p>

      <button className="place-order-btn">Place Order</button>
    </section>
  );
}
