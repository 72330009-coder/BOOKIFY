import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import ExploreBooks from "./pages/ExploreBooks";
import BookDetails from "./pages/BookDetails";
import MyLibrary from "./pages/MyLibrary";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreBooks />} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/my-library" element={<MyLibrary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
