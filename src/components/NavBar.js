import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">📖</span>
        <span>Bookify</span>
      </Link>

      {/* NAVIGATION LINKS */}
      <div className="navbar-links">

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/explore" className="nav-link">
          Explore Books
        </NavLink>

        <NavLink to="/book-details" className="nav-link">
          Book Details
        </NavLink>

        <NavLink to="/my-library" className="nav-link">
          My Library
        </NavLink>

      </div>

      {/* LOGIN AND SIGN UP */}
      <div className="navbar-actions">

        <Link to="/login" className="login-button">
          Login
        </Link>

        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default NavBar;