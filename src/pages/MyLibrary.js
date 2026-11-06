import React, { useContext, useEffect } from "react";
import BookContext from "../context/BookContext";
import { bookCollection } from "./ExploreBooks";
import "../styles/MyLibrary.css";

function MyLibrary() {
  const { borrowedBooks, wishlist } = useContext(BookContext);

  useEffect(() => {
    document.title = "My Library | BOOKIFY";
  }, []);

  const borrowedBookList = bookCollection.filter(book =>
    borrowedBooks.includes(book.id)
  );

  const wishlistBookList = bookCollection.filter(book =>
    wishlist.includes(book.id)
  );

  return (
    <div className="my-library-page">

      {/* TOP IMAGE */}
      <header className="library-hero">
        <div className="library-hero-overlay">
          <p>YOUR PERSONAL COLLECTION</p>
          <h1>My Library</h1>
          <span>Your books, all in one place.</span>
        </div>
      </header>

      {/* BORROWED BOOKS */}
      <section className="library-section">

        <div className="library-section-heading">
          <h2>My Borrowed Books</h2>
          <span>{borrowedBookList.length} Books</span>
        </div>

        {borrowedBookList.length === 0 ? (
          <p className="library-empty">
            You haven't borrowed any books yet.
          </p>
        ) : (
          <div className="library-books-grid">
            {borrowedBookList.map(book => (
              <div className="library-book-card" key={book.id}>

                <div className="book-icon">📖</div>

                <div className="library-book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* WISHLIST */}
      <section className="library-section">

        <div className="library-section-heading">
          <h2>My Wishlist</h2>
          <span>{wishlistBookList.length} Books</span>
        </div>

        {wishlistBookList.length === 0 ? (
          <p className="library-empty">
            You haven't added any books to your wishlist yet.
          </p>
        ) : (
          <div className="library-books-grid">
            {wishlistBookList.map(book => (
              <div className="library-book-card" key={book.id}>

                <div className="book-icon">♡</div>

                <div className="library-book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
}

export default MyLibrary;