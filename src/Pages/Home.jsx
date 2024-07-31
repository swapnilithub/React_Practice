import React from 'react';
import './Home.css';

const books = [
  {
    title: "Swapnil Ranjan",
    author: "Swapnil Ranjan",
    cover: "path/to/great-gatsby.jpg", // Replace with actual path
    description: "Swapnil Ranjan."
  },
  {
    title: "Cristiano ronaldo",
    author: "Swapnil Ranjan",
    cover: "path/to/1984.jpg", // Replace with actual path
    description: "Swapnil Ranjan."
  },
  {
    title: "Stadium",
    author: "Swapnil Ranjan",
    cover: "path/to/to-kill-a-mockingbird.jpg", // Replace with actual path
    description: "Swapnil Ranjan."
  }
];

const Home = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Welcome to the Home Page</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/account">My account</a></li>
        </ul>
      </nav>
      <div className="tagline">Hey Siri</div>

      {/* Book Display Section */}
      <section className="book-display">
        <h2>Featured Books</h2>
        <div className="book-container">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <p className="book-description">{book.description}</p>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Home;
