import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// Import website images
import libraryImage from "../images/library.png";
import readingImage from "../images/reading.png";
import booksImage from "../images/books.png";

// Import book covers
import atomicImage from "../images/atomic-habits.png";
import midnightImage from "../images/midnight-library.png";
import harryImage from "../images/harry-potter.png";
import duneImage from "../images/dune.png";
import cleanCodeImage from "../images/clean-code.png";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">
          <p className="hero-small-title">
            WELCOME TO BOOKIFY
          </p>

          <h1>
            Discover Your
            <br />
            Favorite Book
          </h1>

          <p className="hero-description">
            Explore wonderful stories, discover new authors,
            and enjoy your own smart library experience.
          </p>

          <Link to="/explore" className="main-button">
            Explore Books
          </Link>
        </div>

        <div className="hero-image">
          <img src={libraryImage} alt="Beautiful library" />
        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="about-section">

        <div className="about-image">
          <img src={readingImage} alt="Person reading a book" />
        </div>

        <div className="about-content">
          <p className="section-small-title">ABOUT BOOKIFY</p>

          <h2>A World of Stories Awaits You</h2>

          <p>
            BOOKIFY makes discovering and managing books easier.
            Find interesting stories, explore different authors,
            and keep your favorite books organized in one place.
          </p>

          <Link to="/explore" className="text-button">
            Discover More →
          </Link>
        </div>

      </section>


      {/* BOOKS BANNER */}
      <section className="books-banner-section">

        <div className="section-heading">
          <p className="section-small-title">EXPLORE AND DISCOVER</p>

          <h2>Discover the World of Books</h2>

          <p>
            Every book opens a new door to imagination.
          </p>
        </div>

        <div className="books-banner">
          <img src={booksImage} alt="Beautiful collection of books" />
        </div>

      </section>


      {/* FEATURED BOOKS */}
      <section className="featured-section">

        <div className="section-heading">
          <p className="section-small-title">OUR COLLECTION</p>

          <h2>Featured Books</h2>

          <p>
            Discover some of our most popular books.
          </p>
        </div>

        <div className="book-cards">

          {/* ATOMIC HABITS */}
          <div className="book-card">
            <div className="book-cover">
              <img src={atomicImage} alt="Atomic Habits book cover" />
            </div>

            <h3>Atomic Habits</h3>
            <p>James Clear</p>
            <span className="book-rating">⭐ 4.8</span>

            <Link to="/book-details" className="details-button">
              View Details
            </Link>
          </div>


          {/* THE MIDNIGHT LIBRARY */}
          <div className="book-card">
            <div className="book-cover">
              <img src={midnightImage} alt="The Midnight Library book cover" />
            </div>

            <h3>The Midnight Library</h3>
            <p>Matt Haig</p>
            <span className="book-rating">⭐ 4.7</span>

            <Link to="/book-details" className="details-button">
              View Details
            </Link>
          </div>


          {/* HARRY POTTER */}
          <div className="book-card">
            <div className="book-cover">
              <img src={harryImage} alt="Harry Potter book cover" />
            </div>

            <h3>Harry Potter</h3>
            <p>J.K. Rowling</p>
            <span className="book-rating">⭐ 4.9</span>

            <Link to="/book-details" className="details-button">
              View Details
            </Link>
          </div>


          {/* DUNE */}
          <div className="book-card">
            <div className="book-cover">
              <img src={duneImage} alt="Dune book cover" />
            </div>

            <h3>Dune</h3>
            <p>Frank Herbert</p>
            <span className="book-rating">⭐ 4.9</span>

            <Link to="/book-details" className="details-button">
              View Details
            </Link>
          </div>


          {/* CLEAN CODE */}
          <div className="book-card">
            <div className="book-cover">
              <img src={cleanCodeImage} alt="Clean Code book cover" />
            </div>

            <h3>Clean Code</h3>
            <p>Robert C. Martin</p>
            <span className="book-rating">⭐ 4.7</span>

            <Link to="/book-details" className="details-button">
              View Details
            </Link>
          </div>

        </div>

        <Link to="/explore" className="main-button view-all-button">
          View All Books
        </Link>

      </section>


      {/* FEATURES SECTION */}
      <section className="features-section">

        <div className="section-heading">
          <p className="section-small-title">THE BOOKIFY EXPERIENCE</p>

          <h2>Why Choose Bookify?</h2>

          <p>
            Everything you need for a better reading experience.
          </p>
        </div>

        <div className="features-container">

          <div className="feature-card">
            <span>📚</span>
            <h3>Discover Books</h3>
            <p>
              Explore a wide collection of books and find
              your next favorite story.
            </p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Save Favorites</h3>
            <p>
              Keep all your favorite books organized
              in one place.
            </p>
          </div>

          <div className="feature-card">
            <span>📖</span>
            <h3>Manage Your Library</h3>
            <p>
              Track borrowed books and manage your
              personal reading list.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;