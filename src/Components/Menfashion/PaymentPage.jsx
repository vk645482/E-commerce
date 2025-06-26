import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Listing.css"; // We'll create this CSS file

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const totalAmount = state?.totalAmount || 0;
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });
  const [upiId, setUpiId] = useState("");
  const [walletSelected, setWalletSelected] = useState("");

  const paymentMethods = [
    { id: "credit-card", name: "Credit/Debit Card" },
    { id: "upi", name: "UPI" },
    { id: "netbanking", name: "Net Banking" },
    { id: "wallet", name: "Wallets" },
    { id: "cod", name: "Cash on Delivery" }
  ];

  const wallets = [
    { id: "paytm", name: "Paytm" },
    { id: "phonepe", name: "PhonePe" },
    { id: "amazonpay", name: "Amazon Pay" }
  ];

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    console.log("Payment method:", selectedPaymentMethod);
    console.log("Payment details:", 
      selectedPaymentMethod === "credit-card" ? cardDetails :
      selectedPaymentMethod === "upi" ? upiId :
      selectedPaymentMethod === "wallet" ? walletSelected :
      "COD"
    );
    
    // Navigate to order confirmation page
    navigate("/order-confirmation", { 
      state: { 
        amount: totalAmount,
        paymentMethod: selectedPaymentMethod 
      } 
    });
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>Payment Options</h1>
        <div className="order-summary">
          <span>Order Total:</span>
          <span className="amount">₹{totalAmount.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div className="payment-methods">
        <form onSubmit={handlePaymentSubmit}>
          {paymentMethods.map(method => (
            <div key={method.id} className="payment-method">
              <input
                type="radio"
                id={method.id}
                name="paymentMethod"
                checked={selectedPaymentMethod === method.id}
                onChange={() => setSelectedPaymentMethod(method.id)}
              />
              <label htmlFor={method.id}>{method.name}</label>

              {/* Payment method specific inputs */}
              {selectedPaymentMethod === method.id && (
                <div className="payment-details">
                  {method.id === "credit-card" && (
                    <div className="card-details">
                      <div className="form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          name="number"
                          value={cardDetails.number}
                          onChange={handleCardInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="16"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Cardholder Name</label>
                        <input
                          type="text"
                          name="name"
                          value={cardDetails.name}
                          onChange={handleCardInputChange}
                          placeholder="Name on card"
                          required
                        />
                      </div>
                      <div className="card-row">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            name="expiry"
                            value={cardDetails.expiry}
                            onChange={handleCardInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={cardDetails.cvv}
                            onChange={handleCardInputChange}
                            placeholder="123"
                            maxLength="3"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {method.id === "upi" && (
                    <div className="form-group">
                      <label>UPI ID</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        required
                      />
                    </div>
                  )}

                  {method.id === "wallet" && (
                    <div className="wallet-options">
                      {wallets.map(wallet => (
                        <div key={wallet.id} className="wallet-option">
                          <input
                            type="radio"
                            id={wallet.id}
                            name="wallet"
                            checked={walletSelected === wallet.id}
                            onChange={() => setWalletSelected(wallet.id)}
                            required
                          />
                          <label htmlFor={wallet.id}>{wallet.name}</label>
                        </div>
                      ))}
                    </div>
                  )}

                  {method.id === "netbanking" && (
                    <div className="form-group">
                      <label>Select Bank</label>
                      <select required>
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                      </select>
                    </div>
                  )}

                  {method.id === "cod" && (
                    <div className="cod-message">
                      <p>Pay cash when your order is delivered.</p>
                      <p>A small convenience fee may apply.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <button 
            type="submit" 
            className="pay-now-btn"
            disabled={!selectedPaymentMethod}
          >
            Pay ₹{totalAmount.toLocaleString("en-IN")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;