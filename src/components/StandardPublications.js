import React, {Fragment} from "react";
import PropTypes from "prop-types";

export const StandardPublications = ({publications}) =>
  <div className="StandardPublications">
    <h3 className="pt-5 pb-2">{publications.title}</h3>
    {publications.subtitle ? <p className="font-italic">{publications.subtitle}:</p> : null}
    {publications.articlesPerLanguage.map(articlesPerLanguage =>
      <Fragment key={articlesPerLanguage.language}>
        <h5 className="font-weight-bold">{articlesPerLanguage.language}</h5>
        {
          articlesPerLanguage.articles.length === 0 || (articlesPerLanguage.articles.length === 1 && !articlesPerLanguage.articles[0].title) ?
            <p>Forthcoming</p> :
            articlesPerLanguage.articles.map(article =>
              <p key={article.title}>
                {article.author ? <span>{article.author}, </span> : null}
                <span>{article.title}, </span>
                <span className="font-italic">{article.publishedOn}, {article.year}</span>
                {article.link ? <a href={article.link} target="_blank" rel="noopener noreferrer">: {article.link} </a> : null}
              </p>
            )
        }
      </Fragment>
    )
    }
    <p className="pt-3">
      <Fragment>
        {publications.additionalInfo ? <span>{publications.additionalInfo} </span> : null}
        {publications.additionalInfoLink ?
          <a href={publications.additionalInfoLink} target="_blank"
             rel="noopener noreferrer">{publications.additionalInfoLink}</a> : null}
      </Fragment>
    </p>
  </div>
;

StandardPublications.propTypes = {
  publications: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    articlesPerLanguage: PropTypes.arrayOf(
      PropTypes.shape({
        language: PropTypes.string,
        articles: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            author: PropTypes.string,
            year: PropTypes.number,
            publishedOn: PropTypes.string,
            link: PropTypes.string,
          })
        )
      })
    ),
    additionalInfo: PropTypes.string,
    additionalInfoLink: PropTypes.string
  })
};