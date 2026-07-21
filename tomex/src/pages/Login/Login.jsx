import React from "react";
import { Link } from "react-router";
import "./login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Username or Email" required />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          {/* Links Row */}
          <div className="links-row">
            <div className="new-account-block">
              <span>New to TOMEX?</span>
              <Link to="/role-selection" className="create-acc-link">
                Create Account
              </Link>
            </div>

            <Link to="/forgot-password" className="forgot-pw">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
