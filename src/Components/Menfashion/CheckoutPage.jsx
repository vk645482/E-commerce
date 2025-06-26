import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Listing.css";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product || {
    id: 1,
    name: "Classic Cotton T-Shirt",
    mainImage: "https://placehold.co/128x128",
    discountedPrice: 799,
    originalPrice: 1299,
    variant: "Navy Blue with Crew Neck",
  };

  const [quantity, setQuantity] = useState(state?.quantity || 1);
  const [selectedSize, setSelectedSize] = useState(state?.selectedSize || "");
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const pricePerItem = product.discountedPrice;
  const deliveryCharges = 0;

  const addresses = [
    {
      name: "John Doe",
      details: "123 Main Street, Apt 4B, Mumbai, Maharashtra - 400001",
    },
    {
      name: "Jane Doe",
      details: "45 Elm Street, Near Market, Bangalore, Karnataka - 560076",
    },
  ];

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? Math.min(10, prev + 1) : Math.max(1, prev - 1)
    );
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const calculateTotal = () => {
    const subtotal = quantity * pricePerItem;
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount + deliveryCharges;
  };

  const handleContinue = () => {
    navigate("/payment", { state: { totalAmount: calculateTotal() } });
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        {/* Left Section */}
        <div className="checkout-left">
          {/* Delivery Address */}
          <div className="section">
            <h2 className="section-title">Delivery Address</h2>
            {addresses.map((address, index) => (
              <div key={index} className={`address-details ${selectedAddress === index ? "selected" : ""}`}>
                <p>
                  <strong>{address.name}</strong>
                </p>
                <p>{address.details}</p>
                <button onClick={() => setSelectedAddress(index)} className="change-btn">
                  {selectedAddress === index ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="section">
            <h2 className="section-title">Order Summary</h2>
            <div className="product">
              <div className="product-img">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/128x128";
                  }}
                />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.variant}</p>
                {selectedSize && <p>Size: {selectedSize}</p>}
                <p>
                  ₹{pricePerItem.toLocaleString("en-IN")}{" "}
                  <span className="original-price">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                </p>
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="checkout-right">
          <h2 className="section-title">Price Details</h2>
          <div className="price-details">
            <div className="price-row">
              <span>Price ({quantity} item{quantity > 1 ? "s" : ""})</span>
              <span>₹{(quantity * pricePerItem).toLocaleString("en-IN")}</span>
            </div>
            <div className="price-row">
              <span>Delivery Charges</span>
              <span className="free">
                {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
              </span>
            </div>
            {discount > 0 && (
              <div className="price-row">
                <span>Discount</span>
                <span>-₹{((quantity * pricePerItem * discount) / 100).toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="total-row">
              <span>Total Payable</span>
              <span>₹{calculateTotal().toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="promo-code">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromo}>Apply</button>
          </div>

          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
