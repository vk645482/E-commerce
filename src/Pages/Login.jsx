import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  return (
    <div className="Login">
      <div className="card">
        <h1>Login</h1>
        <form>
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
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="button">
            Sign In
          </button>
        </form>
        <Link to="/signUp" className="link">
          Don’t have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
