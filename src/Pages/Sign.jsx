import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
  return (
    <div className="sign-container">
      <div className="card">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
        <Link to="/login" className="link">
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default Sign;
