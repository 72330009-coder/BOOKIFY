import React, { createContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {

  // SELECTED BOOK
  const [selectedBook, setSelectedBook] = useState(null);

  // WISHLIST
  const [wishlist, setWishlist] = useState([]);

  // BORROWED BOOKS
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // REVIEWS FOR EACH BOOK
  const [reviewsByBook, setReviewsByBook] = useState({});

  // READING PROGRESS
  const [readingProgress, setReadingProgress] = useState({});

  // READING GOAL
  const [readingGoal, setReadingGoal] = useState(5);

  const value = {

    selectedBook,
    setSelectedBook,

    wishlist,
    setWishlist,

    borrowedBooks,
    setBorrowedBooks,

    reviewsByBook,
    setReviewsByBook,

    readingProgress,
    setReadingProgress,

    readingGoal,
    setReadingGoal

  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );

}

export default BookContext;