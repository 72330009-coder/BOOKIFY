import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login | BOOKIFY";
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login successful!");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">📖</div>

        <h1>Welcome Back!</h1>

        <p className="login-description">
          Login to continue your reading journey.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-submit">
            Login
          </button>

        </form>

        <p className="login-switch">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;