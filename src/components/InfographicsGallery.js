import React, {useCallback, useState} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

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

  console.log(infographicsList)

  const photos = infographicsList.map(i => ({src: `/img/${i.image.relativePath}`, caption: i.caption, width: i.image.childImageSharp.fixed.width, height: i.image.childImageSharp.fixed.height}))
  console.log(photos)

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};