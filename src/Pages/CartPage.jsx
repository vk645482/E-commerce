import React from 'react';
import './CartPage.css';

const CartPage = () => {
  return (
    <div className="cart-body">
      <div className="cart-container">
        <h1 className="cart-header">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="cart-item">
          <div>
            <h4>Product 1</h4>
            <p>Price: $19.99</p>
            <p>Quantity: 2</p>
          </div>
          <p>$39.98</p>
        </div>
        <div className="cart-item">
          <div>
            <h4>Product 2</h4>
            <p>Price: $9.99</p>
            <p>Quantity: 1</p>
          </div>
          <p>$9.99</p>
        </div>
        <div className="cart-item">
          <div>
            <h4>Product 3</h4>
            <p>Price: $14.99</p>
            <p>Quantity: 3</p>
          </div>
          <p>$44.97</p>
        </div>

        {/* Total Section */}
        <div className="total-section">
          <span>Total</span>
          <span>$94.94</span>
        </div>

        {/* Checkout Button */}
        <a href="#" className="checkout-button">
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
};

export default CartPage;
