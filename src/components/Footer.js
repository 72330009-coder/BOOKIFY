import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>📖 Bookify</h2>

      <p>Your Smart Library Experience</p>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/explore">Explore Books</a>
         <a href="/book details">Book Details</a>
        <a href="/my-library">My Library</a>
      </div>

      <p className="copyright">
        © 2026 Bookify. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;