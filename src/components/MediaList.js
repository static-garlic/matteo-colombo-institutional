import React, {Fragment} from "react";
import PropTypes from "prop-types";

export const MediaList = ({mediaList}) =>
  <div className="MediaList pb-4">
    <h3 className="pb-2">{mediaList.mediaType}</h3>
    {mediaList.mediaPerLanguage.map(mediaPerLanguage =>
      <Fragment key={mediaPerLanguage.language}>
        <h5 className="font-weight-bold">{mediaPerLanguage.language}</h5>
        {
          mediaPerLanguage.mediaList.map(media =>
            <p key={media.title}>
              {media.author ? <span>{media.author}, </span> : null}
              <span>{media.title}, </span>
              <span className="font-italic">{media.publishedOn}, {media.year} </span>
              {media.link ? <Fragment><span>: </span><a href={media.link} target="_blank" rel="noopener noreferrer">{media.link}</a></Fragment> : null}
            </p>
          )
        }
      </Fragment>
    )
    }
  </div>
;

MediaList.propTypes = {
  mediaList: PropTypes.shape({
    mediaType: PropTypes.string,
    mediaPerLanguage: PropTypes.arrayOf(
      PropTypes.shape({
        language: PropTypes.string,
        mediaList: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            author: PropTypes.string,
            year: PropTypes.string,
            publishedOn: PropTypes.string,
            link: PropTypes.string,
          })
        )
      })
    )
  })
};