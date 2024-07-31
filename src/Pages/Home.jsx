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
    title: "Cristiano Ronaldo",
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

const jobPostings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Bangalore",
    description: "Looking for a skilled software engineer with 3+ years experience."
  },
  {
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "Bangalore",
    description: "Seeking a product manager to lead our product development team."
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    location: "Bangalore",
    description: "Hiring a creative UI/UX designer to work on exciting new projects."
  }
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "An amazing platform that has helped me find the perfect job!"
  },
  {
    name: "Jane Smith",
    feedback: "Great user experience and support. Highly recommended!"
  },
  {
    name: "Michael Brown",
    feedback: "A fantastic resource for job seekers. Very user-friendly!"
  }
];

const newsArticles = [
  {
    title: "New Job Opportunities in Tech",
    summary: "Explore the latest job opportunities in the technology sector.",
    link: "#"
  },
  {
    title: "How to Improve Your Resume",
    summary: "Tips and tricks to enhance your resume and land your dream job.",
    link: "#"
  },
  {
    title: "Interview Preparation Guide",
    summary: "Prepare for your next interview with our comprehensive guide.",
    link: "#"
  }
];

const Home = () => {
  return (
    <>
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
      </header>

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

      {/* Recent Job Postings Section */}
      <section className="job-postings">
        <h2>Recent Job Postings</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {jobPostings.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials">
        <h2>User Testimonials</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-container">
          {newsArticles.map((article, index) => (
            <div className="news-card" key={index}>
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              <a href={article.link} className="news-link">Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Suited</span>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/account">My account</a></li>
            </ul>
          </nav>
          <div className="footer-tagline">
            <p>Recruiting Reinvented</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
