import React from "react";
import "./login.css";

function Login() {
  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="login">Login</h1>
        <input type="text" placeholder="Username or Email" />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="password"
        />
        <p className="forgot-pw">Forgot Password? </p>
        <button type="button">Login</button>
      </div>
    </main>
  );
}

export default Login;
