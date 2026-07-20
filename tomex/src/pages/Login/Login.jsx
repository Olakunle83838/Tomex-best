import React from "react";
import "./login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login">Login</h1>

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

          <a href="#" className="forgot-pw">
            Forgot Password?
          </a>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
