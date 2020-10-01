import React from "react";
import PropTypes from "prop-types";

export const PeerArticles = ({peerArticles}) => (
  <div className="PeerArticles">
    <h3 className="pt-4 pb-2">{peerArticles.title}</h3>
    { peerArticles.articles.map(article =>
      <p key={article.title}>
        <span>{article.author} ({article.year}). </span>
        <span>{article.title}, </span>
        <span className="font-italic">{article.publishedOn}, </span>
        <span>{article.section}, </span>
        <span>p.{article.pages} </span>
      </p>
    )
    }
  </div>
);

PeerArticles.propTypes = {
  peerArticles: PropTypes.shape({
    title: PropTypes.string,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        year: PropTypes.number,
        publishedOn: PropTypes.string,
        section: PropTypes.string,
        pages: PropTypes.string
      })
    )
  })
};