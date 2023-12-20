import "./styles.css";
import { useState } from "react";
import bookImg from "/src/images/book.svg";

const library = {
  JavaScript: [
    {
      bookName: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "4.5/5",
    },
    {
      bookName: "You Don't Know JS",
      author: "Kyle Simpson",
      rating: "4/5",
    },
    {
      bookName: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      rating: "3.5/5",
    },
  ],
  Autobiography: [
    {
      bookName: "Waiting for a Visa",
      author: "Dr. B. R. Ambedkar",
      rating: "5/5",
    },
    {
      bookName: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      rating: "4/5",
    },
    {
      bookName: "Playing It My Way",
      author: "Sachin Tendulkar",
      rating: "3.5/5",
    },
  ],
  Intellectual: [
    {
      bookName: "Do Epic Shit",
      author: "Ankur Warikoo",
      rating: "4/5",
    },
    {
      bookName: "Steal Like an Artist",
      author: "Austin Kleon",
      rating: "4.5/5",
    },
    {
      bookName: "The Psychology of Money",
      author: "Morgan Housel",
      rating: "4/5",
    },
  ],
};

const genreWeHave = Object.keys(library);

export default function App() {
  const [selectedGenre, setGenre] = useState("JavaScript");

  const [isActive, setIsActive] = useState("JavaScript");

  function genreClickHandler(genre) {
    setGenre(genre);
    setIsActive(genre);
  }

  return (
    <div className="App">
      <nav className="nav">
        <div className="flexContainer">
          <img className="img" src={bookImg} alt="book" />
          <h1 className="navTitle">BookWise</h1>
        </div>
      </nav>
      <header className="header">
        <h3 className="headerHeading">
          Pages of Wisdom, Chapters of Insight !
        </h3>
      </header>

      <sec className="section">
        <div className="buttonDiv">
          {genreWeHave.map((genre) => (
            <button
              className={`button ${isActive === genre ? "active" : ""}`}
              key={genre}
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <ul className="booksList">
          {library[selectedGenre].map((book) => (
            <li className="book" key={book.bookName}>
              <div className="bookName">
                {" "}
                <span className="highlight">Book : </span>
                {book.bookName}{" "}
              </div>
              <div className="author">
                {" "}
                <span className="highlight">Author : </span>
                {book.author}{" "}
              </div>
              <div className="ratings">
                {" "}
                <span className="highlight">Rating : </span>
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </sec>

      <footer className="footer">
        <div className="footerHeading">
          <h3>Blame Amol Sasane for any bugs, Find me here!</h3>
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://github.com/amolsasane"
            >
              <i className="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/amolsasane"
            >
              <i className="fa fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://twitter.com/amolsasane_"
            >
              <i className="fab fa-twitter icon"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="link"
              href="https://www.instagram.com/amolsasane_"
            >
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
