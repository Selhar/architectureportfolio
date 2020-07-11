import React, { useState, useCallback } from "react";
import "./style.css";
import Carousel, { Modal, ModalGateway } from "react-images";

const Images = ({images, width, openModal}) => images.map((item, index) => {
  return (
    <div className="gallery-picture-container" onClick={() => openModal(index)}>
      <img src={item.src} height="auto" width={width} className="gallery-picture" />
    </div>
  )
});
export default ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = index => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div className="gallery-container">
      <Images images={images} openModal={openLightbox} width="150px" />
      <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={images.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: "SUBSTITUIR POR TÍTULO"
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
    </div>
  )
};