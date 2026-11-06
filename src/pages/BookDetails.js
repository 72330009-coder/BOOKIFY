import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import "../styles/BookDetails.css";

function BookDetails() {

  // GET DATA FROM CONTEXT
  const {
    selectedBook,
    wishlist,
    setWishlist,
    borrowedBooks,
    setBorrowedBooks,
    reviewsByBook,
    setReviewsByBook
  } = useContext(BookContext);


  // BORROWING STATE
  const [isBorrowed, setIsBorrowed] = useState(false);


  // NEW REVIEW STATES
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);


  // GET REVIEWS FOR THE SELECTED BOOK
  const reviews = selectedBook
    ? reviewsByBook[selectedBook.id] || []
    : [];


  // PAGE TITLE AND BORROWING STATUS
  useEffect(() => {

    if (selectedBook) {

      document.title = `${selectedBook.title} | BOOKIFY`;

      setIsBorrowed(
        borrowedBooks.includes(selectedBook.id)
      );

      setNewReview("");
      setNewRating(5);

    }

  }, [selectedBook, borrowedBooks]);


  // BORROW BOOK FUNCTION
  function handleBorrow() {

    if (
      selectedBook &&
      selectedBook.available &&
      selectedBook.copies > 0 &&
      !isBorrowed
    ) {

      setBorrowedBooks([
        ...borrowedBooks,
        selectedBook.id
      ]);

      setIsBorrowed(true);

    }

  }


  // WISHLIST FUNCTION
  function handleWishlist() {

    if (wishlist.includes(selectedBook.id)) {

      setWishlist(
        wishlist.filter((id) => id !== selectedBook.id)
      );

    } else {

      setWishlist([
        ...wishlist,
        selectedBook.id
      ]);

    }

  }


  // ADD REVIEW FUNCTION
  function handleAddReview(e) {

    e.preventDefault();

    if (newReview.trim() === "") {
      return;
    }

    const review = {
      id: Date.now(),
      name: "You",
      rating: Number(newRating),
      comment: newReview
    };

    setReviewsByBook({

      ...reviewsByBook,

      [selectedBook.id]: [
        ...reviews,
        review
      ]

    });

    setNewReview("");
    setNewRating(5);

  }


  // CHECK IF A BOOK IS SELECTED
  if (!selectedBook) {

    return (

      <div className="book-details-page">

        <h1>No Book Selected</h1>

        <p>Please choose a book from our collection first.</p>

        <Link to="/explore" className="details-button">
          Explore Books
        </Link>

      </div>

    );

  }


  // WISHLIST STATUS
  const isWishlisted = wishlist.includes(selectedBook.id);


  // AVAILABLE COPIES
  const remainingCopies =
    selectedBook.copies - (isBorrowed ? 1 : 0);


  return (

    <div className="book-details-page">

      {/* PAGE TITLE */}

      <h1>Book Details</h1>


      {/* BOOK INFORMATION */}

      <div className="book-details-container">

        <div className="book-details-cover">

          <img
            src={`https://covers.openlibrary.org/b/isbn/${selectedBook.isbn}-L.jpg`}
            alt={selectedBook.title}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/300x450?text=Book+Cover";
            }}
          />

        </div>


        <div className="book-details-info">

          <span>{selectedBook.category}</span>

          <h2>{selectedBook.title}</h2>

          <h3>By {selectedBook.author}</h3>

          <p className="book-rating">
            ⭐ {selectedBook.rating} / 5
          </p>

          <p className="book-description">
            {selectedBook.description}
          </p>

          <p>
            <strong>Publication Year:</strong>{" "}
            {selectedBook.year}
          </p>

          <p>
            <strong>Availability:</strong>{" "}

            {remainingCopies > 0
              ? `${remainingCopies} copies available`
              : "Currently Unavailable"}

          </p>


          {/* BORROW BUTTON */}

          <button
            className="borrow-button"
            onClick={handleBorrow}
            disabled={
              isBorrowed ||
              remainingCopies === 0
            }
          >

            {isBorrowed
              ? "✓ Book Borrowed"
              : remainingCopies === 0
              ? "Currently Unavailable"
              : "📖 Borrow This Book"}

          </button>


          {/* WISHLIST BUTTON */}

          <button
            className="wishlist-button"
            onClick={handleWishlist}
          >

            {isWishlisted
              ? "❤️ Remove from Wishlist"
              : "🤍 Add to Wishlist"}

          </button>


          {/* SUCCESS MESSAGE */}

          {isBorrowed && (

            <p className="success-message">
              Congratulations! You borrowed this book.
            </p>

          )}

        </div>

      </div>


      {/* REVIEWS SECTION */}

      <section className="reviews-section">

        <h2>Readers' Reviews</h2>

        <p className="reviews-subtitle">
          See what other readers think about {selectedBook.title}.
        </p>


        {/* DISPLAY REVIEWS */}

        <div className="reviews-list">

          {reviews.length > 0 ? (

            reviews.map((review) => (

              <div className="review-card" key={review.id}>

                <h3>{review.name}</h3>

                <p className="review-stars">
                  {"⭐".repeat(review.rating)}
                </p>

                <p>{review.comment}</p>

              </div>

            ))

          ) : (

            <p className="no-reviews">
              No reviews yet. Be the first to review this book!
            </p>

          )}

        </div>


        {/* ADD NEW REVIEW */}

        <div className="add-review">

          <h2>Share Your Experience</h2>

          <form onSubmit={handleAddReview}>

            <label>Your Rating</label>

            <select
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
            >

              <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
              <option value="4">⭐⭐⭐⭐ - Very Good</option>
              <option value="3">⭐⭐⭐ - Good</option>
              <option value="2">⭐⭐ - Fair</option>
              <option value="1">⭐ - Poor</option>

            </select>


            <label>Write Your Review</label>

            <textarea
              placeholder="Share your thoughts about this book..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              required
            />


            <button type="submit">
              Submit Review
            </button>

          </form>

        </div>

      </section>


      {/* BACK TO EXPLORE */}

      <div className="back-to-explore">

        <Link to="/explore">
          ← Back to Explore Books
        </Link>

      </div>

    </div>

  );

}

export default BookDetails;