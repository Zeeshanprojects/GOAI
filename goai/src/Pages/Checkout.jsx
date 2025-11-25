import { useContext } from "react";
import { FormContext } from "../Components/FormContext.jsx";
import "./Checkout.css"

export default function Checkout() {
  const { formData } = useContext(FormContext);

  return (
    <section className="checkout-container">
      <h1 className="title">Checkout</h1>

      <h3 className="checkout-heading">Selected Plan</h3>
      <p>{formData.plan}</p>

      <h3 className="checkout-heading">Country & Language</h3>
      <p>{formData.country}</p>
      <p>{formData.language}</p>

      <h3 className="checkout-heading">Mailing Address</h3>
      <p>{formData.address1}</p>
      <p>{formData.address2}</p>
      <p>{formData.address3}</p>
      <p>{formData.city}, {formData.state} - {formData.zip}</p>

      <h3 className="checkout-heading">Contact Info</h3>
      <p>{formData.phone}</p>
      <p>{formData.mobile}</p>
      <p>{formData.email}</p>

      <h3 className="checkout-heading">Account Info</h3>
      <p>Username: {formData.username}</p>
      <p>Website: {formData.website}</p>

      <button className="place-order-btn">Place Order</button>
    </section>
  );
}
