import React, {Fragment, useCallback, useState} from "react";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';

export const InfographicsGallery = ({infographicsList}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, {_, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const movePrev = () => {
    setCurrentImage(prev => (prev + photos.length - 1) % photos.length);
  };

  const moveNext = () => {
    setCurrentImage(prev => (prev + + 1) % photos.length);
  };

  const photos = infographicsList.map(i => ({src: `/img/${i.image.relativePath}`, caption: i.caption, width: i.image.childImageSharp.fixed.width, height: i.image.childImageSharp.fixed.height}))

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} margin={10}/>
        {viewerIsOpen ? (
          <Lightbox
            mainSrc={photos[currentImage].src}
            nextSrc={photos[(currentImage + 1) % photos.length].src}
            prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={movePrev}
            onMoveNextRequest={moveNext}
            imageCaption={
              <Fragment>
                <span>{photos[currentImage].caption.text}</span>
                {photos[currentImage].caption.link ?
                  <Fragment>
                    <span> - </span>
                    <a href={photos[currentImage].caption.link} target="_blank"
                       rel="noopener noreferrer">{photos[currentImage].caption.link}</a>
                  </Fragment>
                  : null}
              </Fragment>
              }
            imagePadding={50}
          />
        ) : null}
    </div>
  );
};