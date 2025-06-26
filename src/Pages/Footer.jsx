import React from "react";
import "./Footer.css"; // Ensure the correct path for CSS
import Facebook from "../Assest/facebook-brands.svg";
import Instagram from "../Assest/instagram-brands.svg";
import LinkedIn from "../Assest/linkedin-brands.svg";
import Twitter from "../Assest/twitter-brands.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="navbar-foo">
          <h3>Links</h3>
          <button aria-label="About Us">About</button>
          <button aria-label="Our Services">Services</button>
          <button aria-label="Terms of Service">Terms of Service</button>
        </div>

        {/* Help Section */}
        <div className="navbar-help">
          <h3>Help</h3>
          <button aria-label="Contact Us">Contact Us</button>
          <button aria-label="Frequently Asked Questions">FAQ</button>
          <button aria-label="Return Policy">Returns</button>
          <button aria-label="Shipping Information">Shipping</button>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="#" aria-label="Facebook">
            <img src={Facebook} alt="Facebook Logo" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={Twitter} alt="Twitter Logo" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={Instagram} alt="Instagram Logo" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>

        {/* Subscription Form */}
        <div className="subscribe-section">
          <h3>Subscribe for Updates</h3>
          <form id="subscribe-form" className="subscribe-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email ID"
              aria-label="Your Email ID"
              required
            />
            <button type="submit" aria-label="Subscribe">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
