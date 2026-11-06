import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import "../styles/ExploreBooks.css";

// 30 BOOKS
export const bookCollection = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    rating: 4.5,
    year: 2019,
    popularity: 95,
    available: true,
    copies: 5,
    isbn: "9781250301697",
    description: "A psychological thriller about a woman who stops speaking after a mysterious crime."
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    rating: 4.3,
    year: 1925,
    popularity: 90,
    available: true,
    copies: 3,
    isbn: "9780743273565",
    description: "A story about wealth, love, dreams, and life in the 1920s."
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    rating: 4.7,
    year: 1813,
    popularity: 92,
    available: true,
    copies: 4,
    isbn: "9780141439518",
    description: "A classic love story exploring relationships, pride, and first impressions."
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J.K. Rowling",
    category: "Fantasy",
    rating: 4.9,
    year: 1997,
    popularity: 99,
    available: true,
    copies: 6,
    isbn: "9780590353427",
    description: "A young wizard discovers a magical world full of adventure and friendship."
  },
  {
    id: 5,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    rating: 4.4,
    year: 1988,
    popularity: 85,
    available: true,
    copies: 2,
    isbn: "9780553380163",
    description: "An introduction to the universe, black holes, time, and space."
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    rating: 4.6,
    year: 1988,
    popularity: 97,
    available: true,
    copies: 5,
    isbn: "9780061122415",
    description: "A young shepherd travels in search of his dreams and discovers life's meaning."
  },
  {
    id: 7,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    category: "Romance",
    rating: 4.4,
    year: 2016,
    popularity: 96,
    available: false,
    copies: 0,
    isbn: "9781501110368",
    description: "A powerful story about love, difficult choices, and personal strength."
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    rating: 4.8,
    year: 1937,
    popularity: 94,
    available: true,
    copies: 3,
    isbn: "9780547928227",
    description: "Bilbo Baggins begins an unexpected adventure with a group of dwarves."
  },
  {
    id: 9,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    rating: 4.3,
    year: 2012,
    popularity: 89,
    available: true,
    copies: 2,
    isbn: "9780307588371",
    description: "A mysterious disappearance turns a marriage into a complicated investigation."
  },
  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.9,
    year: 2018,
    popularity: 98,
    available: true,
    copies: 7,
    isbn: "9780735211292",
    description: "Learn how small daily habits can lead to remarkable personal improvements."
  },
  {
    id: 11,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "Historical",
    rating: 4.7,
    year: 2005,
    popularity: 91,
    available: true,
    copies: 3,
    isbn: "9780375842207",
    description: "A moving story about a young girl discovering the power of books during wartime."
  },
  {
    id: 12,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Fantasy",
    rating: 4.6,
    year: 2008,
    popularity: 96,
    available: true,
    copies: 4,
    isbn: "9780439023481",
    description: "Katniss Everdeen fights for survival in a dangerous televised competition."
  },
  {
    id: 13,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    rating: 4.5,
    year: 2020,
    popularity: 93,
    available: true,
    copies: 2,
    isbn: "9780525559474",
    description: "A library between life and death offers a woman the chance to explore different lives."
  },
  {
    id: 14,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    rating: 4.4,
    year: 2003,
    popularity: 90,
    available: true,
    copies: 3,
    isbn: "9780307474278",
    description: "A professor investigates a mystery involving secret codes and historical clues."
  },
  {
    id: 15,
    title: "Me Before You",
    author: "Jojo Moyes",
    category: "Romance",
    rating: 4.5,
    year: 2012,
    popularity: 88,
    available: true,
    copies: 2,
    isbn: "9780143124542",
    description: "An unexpected friendship changes the lives of two very different people."
  },
  {
    id: 16,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Self-Help",
    rating: 4.8,
    year: 2020,
    popularity: 95,
    available: true,
    copies: 4,
    isbn: "9780857197689",
    description: "Explore how emotions and behavior influence the way people manage money."
  },
  {
    id: 17,
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
    rating: 4.6,
    year: 1965,
    popularity: 92,
    available: true,
    copies: 3,
    isbn: "9780441172719",
    description: "A young nobleman faces political conflict and danger on a desert planet."
  },
  {
    id: 18,
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Romance",
    rating: 4.5,
    year: 2012,
    popularity: 91,
    available: false,
    copies: 0,
    isbn: "9780525478812",
    description: "Two teenagers find love and meaning while facing difficult circumstances."
  },
  {
    id: 19,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "Mystery",
    rating: 4.8,
    year: 1892,
    popularity: 94,
    available: true,
    copies: 5,
    isbn: "9780451528018",
    description: "Follow the famous detective Sherlock Holmes as he solves mysterious cases."
  },
  {
    id: 20,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Self-Help",
    rating: 4.3,
    year: 1937,
    popularity: 87,
    available: true,
    copies: 2,
    isbn: "9781585424337",
    description: "A classic book about personal goals, motivation, and success."
  },
  {
    id: 21,
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
    rating: 4.7,
    year: 2018,
    popularity: 93,
    available: true,
    copies: 3,
    isbn: "9780399590504",
    description: "A woman shares her journey from an isolated childhood to higher education."
  },
  {
    id: 22,
    title: "The Martian",
    author: "Andy Weir",
    category: "Science Fiction",
    rating: 4.6,
    year: 2011,
    popularity: 90,
    available: true,
    copies: 2,
    isbn: "9780553418026",
    description: "An astronaut uses science and creativity to survive alone on Mars."
  },
  {
    id: 23,
    title: "Little Women",
    author: "Louisa May Alcott",
    category: "Classic",
    rating: 4.7,
    year: 1868,
    popularity: 89,
    available: true,
    copies: 4,
    isbn: "9780147514011",
    description: "Four sisters grow up together while discovering love, family, and independence."
  },
  {
    id: 24,
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    rating: 4.5,
    year: 1977,
    popularity: 91,
    available: true,
    copies: 2,
    isbn: "9780307743657",
    description: "A family experiences terrifying events inside an isolated hotel."
  },
  {
    id: 25,
    title: "Wonder",
    author: "R.J. Palacio",
    category: "Fiction",
    rating: 4.8,
    year: 2012,
    popularity: 92,
    available: true,
    copies: 3,
    isbn: "9780375869020",
    description: "A young boy teaches others about kindness, acceptance, and friendship."
  },
  {
    id: 26,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Self-Help",
    rating: 4.5,
    year: 1997,
    popularity: 88,
    available: true,
    copies: 2,
    isbn: "9781577314806",
    description: "A guide to understanding the present moment and finding inner peace."
  },
  {
    id: 27,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    category: "Fiction",
    rating: 4.7,
    year: 2017,
    popularity: 97,
    available: true,
    copies: 4,
    isbn: "9781501161933",
    description: "An aging Hollywood star finally reveals the truth about her extraordinary life."
  },
  {
    id: 28,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 4.6,
    year: 2011,
    popularity: 95,
    available: true,
    copies: 3,
    isbn: "9780062316097",
    description: "Explore the history of humanity, from early humans to modern civilization."
  },
  {
    id: 29,
    title: "Dracula",
    author: "Bram Stoker",
    category: "Horror",
    rating: 4.3,
    year: 1897,
    popularity: 86,
    available: true,
    copies: 2,
    isbn: "9780141439846",
    description: "A classic gothic horror story about the mysterious Count Dracula."
  },
  {
    id: 30,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    rating: 4.7,
    year: 2018,
    popularity: 94,
    available: true,
    copies: 3,
    isbn: "9781524763138",
    description: "Michelle Obama shares her personal story, experiences, and life lessons."
  }
];


// BOOK CARD

function BookCard({ book, wishlist, toggleWishlist, setSelectedBook }) {

  const isWishlisted = wishlist.includes(book.id);

  return (
    <div className="book-card">

      <img
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
        alt={book.title}
        onError={(e) => {
          e.target.src = "https://placehold.co/300x450?text=Book+Cover";
        }}
      />

      <h3>{book.title}</h3>

      <p>By {book.author}</p>

      <p>⭐ {book.rating} / 5</p>

      <p>{book.category}</p>

      <p>{book.description}</p>

      <p>
        {book.available
          ? `${book.copies} copies available`
          : "Currently Borrowed"}
      </p>

      <button onClick={() => toggleWishlist(book.id)}>
        {isWishlisted ? "❤️ Remove from Wishlist" : "♡ Add to Wishlist"}
      </button>

      <Link
        to="/book-details"
        onClick={() => setSelectedBook(book)}
        style={{
          display: "block",
          textAlign: "center",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#d6bd83",
          color: "#292b2b",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "12px",
          fontWeight: "600"
        }}
      >
        View Details
      </Link>

    </div>
  );
}


// MAIN COMPONENT

function ExploreBooks() {

  const {
    setSelectedBook,
    wishlist,
    setWishlist
  } = useContext(BookContext);

  const [books] = useState(bookCollection);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [sortOption, setSortOption] = useState("popular");
  const [surpriseBook, setSurpriseBook] = useState(null);

  useEffect(() => {
    document.title = "Explore Books | BOOKIFY";
  }, []);


  // WISHLIST

  function toggleWishlist(bookId) {

    if (wishlist.includes(bookId)) {
      setWishlist(wishlist.filter((id) => id !== bookId));
    } else {
      setWishlist([...wishlist, bookId]);
    }

  }


  // SEARCH AND FILTER

  let filteredBooks = books.filter((book) => {

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search) ||
      book.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    const matchesRating =
      selectedRating === "All" ||
      book.rating >= Number(selectedRating);

    const matchesAvailability =
      availability === "All" ||
      (availability === "Available" && book.available) ||
      (availability === "Borrowed" && !book.available);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesRating &&
      matchesAvailability
    );

  });


  // SORT

  if (sortOption === "popular") {
    filteredBooks.sort((a, b) => b.popularity - a.popularity);
  } else if (sortOption === "newest") {
    filteredBooks.sort((a, b) => b.year - a.year);
  } else if (sortOption === "oldest") {
    filteredBooks.sort((a, b) => a.year - b.year);
  } else if (sortOption === "rating") {
    filteredBooks.sort((a, b) => b.rating - a.rating);
  }


  // SURPRISE ME

  function handleSurpriseMe() {

    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];

    setSurpriseBook(randomBook);
    setSelectedBook(randomBook);

  }


  return (

    <div className="explore-books-page">

      {/* HEADER */}

      <div className="explore-header">

        <h1>Explore Books</h1>

        <p>
          Discover your next favorite book.
          Explore stories, ideas, and new adventures.
        </p>

      </div>


      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search by title, author, or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />


      {/* FILTERS */}

      <div className="explore-filters">

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Mystery">Mystery</option>
          <option value="Classic">Classic</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science">Science</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Historical">Historical</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Horror">Horror</option>
          <option value="History">History</option>
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="4">4 Stars & Above</option>
          <option value="4.5">4.5 Stars & Above</option>
          <option value="4.7">4.7 Stars & Above</option>
        </select>

        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="All">All Books</option>
          <option value="Available">Available</option>
          <option value="Borrowed">Currently Borrowed</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="rating">Highest Rated</option>
        </select>

      </div>


      {/* SURPRISE ME */}

      <button onClick={handleSurpriseMe}>
        🎲 Surprise Me!
      </button>

      {surpriseBook && (

        <div className="surprise-result">

          <h2>Your Surprise Book!</h2>

          <h3>{surpriseBook.title}</h3>

          <p>By {surpriseBook.author}</p>

          <Link
            to="/book-details"
            onClick={() => setSelectedBook(surpriseBook)}
          >
            Discover This Book →
          </Link>

        </div>

      )}


      {/* COLLECTION */}

      <h2>Discover Our Collection</h2>

      <p>
        Showing {filteredBooks.length} of {books.length} books
      </p>


      {/* BOOK GRID */}

      <div className="books-grid">

        {filteredBooks.length > 0 ? (

          filteredBooks.map((book) => (

            <BookCard
              key={book.id}
              book={book}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              setSelectedBook={setSelectedBook}
            />

          ))

        ) : (

          <p>No books found. Try another search or filter.</p>

        )}

      </div>

    </div>

  );

}

export default ExploreBooks;