import React from "react";
import PropTypes from "prop-types";

export const Books = ({books}) => (
  <div className="Books">
    <h3>{books.title}</h3>
    { books.bookList.map(book =>
      <p key={book.title}>
        <span>{book.author} ({book.year}). </span>
        <span>{book.title}, </span>
        <span className="font-italic">{book.publishedOn} </span>
      </p>
    )
    }
  </div>
);

Books.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string,
    bookList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        year: PropTypes.string,
        publishedOn: PropTypes.string
      })
    )
  })
};