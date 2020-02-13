import React, {Fragment, useCallback, useState} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

const CustomFooterCaption = ({ currentView, isModal }) => isModal ? (
  <div>
    <span>{currentView.caption.text}</span>
    {currentView.caption.link ?
      <Fragment>
        <span> - </span>
        <a href={currentView.caption.link} target="_blank"
           rel="noopener noreferrer">{currentView.caption.link}</a>
      </Fragment>
      : null}
  </div>
) : null;

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


  const photos = infographicsList.map(i => ({src: `/img/${i.image.relativePath}`, caption: i.caption, width: i.image.childImageSharp.fixed.width, height: i.image.childImageSharp.fixed.height}))

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} margin={10}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
              components={{ FooterCaption: CustomFooterCaption }}
              styles={{
                view: base => ({
                  ...base,
                  '& > img': {
                    maxHeight: '87vh',
                  },
                })
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};