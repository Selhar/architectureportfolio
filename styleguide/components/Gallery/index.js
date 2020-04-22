import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
    <Gallery photos={images} onClick={openLightbox} margin={1}/>
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={images.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  </div>
  )
};