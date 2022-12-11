import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./CheckoutDetails.module.scss";

const initialAdressState = {
  name: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  phone: "",
};

const CheckoutDetails = () => {
  const [shippingAdress, setShippingAdress] = useState({
    ...initialAdressState,
  });
  const [billingAdress, setBillingAdress] = useState({ ...initialAdressState });

  const handleShipping = () => {};
  const handleBilling = () => {};
  const handleSubmit = () => {};
  const navigate = useNavigate();

  const backToCart = () => {
    navigate("/cart");
  };

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <div>
          <button className="--btn --btn-primary" onClick={() => backToCart()}>
            Back To Cart
          </button>
        </div>
        <br />
        <h2>Checkout Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Card cardClass={styles.card}>
              <h3>Shipping Adress</h3>
              <label>Recipient Name:</label>
              <input
                type="text"
                placeholder="Recipient Name"
                required
                name="name"
                value={shippingAdress.name}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>Adress Line 1:</label>
              <input
                type="text"
                placeholder="Adress Line 1"
                required
                name="line1"
                value={shippingAdress.line1}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>Adress Line 2:</label>
              <input
                type="text"
                placeholder="Adress Line 2"
                name="line2"
                value={shippingAdress.line2}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>City:</label>
              <input
                type="text"
                placeholder="City"
                required
                name="city"
                value={shippingAdress.city}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>State:</label>
              <input
                type="text"
                placeholder="State"
                required
                name="state"
                value={shippingAdress.state}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>Postal Code:</label>
              <input
                type="text"
                placeholder="Postal Code"
                required
                name="postal_code"
                value={shippingAdress.postal_code}
                onChange={(e) => handleShipping(e)}
              ></input>
              <label>Country:</label>
              <label>Phone Number:</label>
              <input
                type="text"
                placeholder="Phone Number"
                required
                name="phone"
                value={shippingAdress.phone}
                onChange={(e) => handleShipping(e)}
              ></input>
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutDetails;
