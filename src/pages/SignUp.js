import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Sign Up | BOOKIFY";
  }, []);

  function handleSignUp(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Account created successfully!");
  }

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-icon">📖</div>

        <h1>Create Account</h1>

        <p className="signup-description">
          Join BOOKIFY and start your reading journey.
        </p>

        <form onSubmit={handleSignUp}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signup-submit">
            Sign Up
          </button>

        </form>

        <p className="signup-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;