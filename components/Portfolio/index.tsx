import React, { useState, useEffect } from "react";

import { Image } from "../utils/types"
import { PortfolioPage } from "../utils/constants"
import { Title } from "../Title";
import Gallery from "../Gallery"

type Portfolio = {
  images: Array<Image>;
};

const Portfolio = ({ images }: Portfolio) => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  // const pagination = images.length >= 9 ? [[images.slice(0,9)], [images.slice(9,19)]] : "";

  useEffect(() => {
    document.body.style.overflowY = isFullscreen ? "hidden" : "visible";
  })
      
  return (
    <div id="portfolio" className="mb-16">
      <Title classes="text-center" text={PortfolioPage.title}></Title>
      <div className="grid grid-flow-row grid-cols-1
          gap-8 w-11/12 my-0 mx-auto lg:grid-cols-3">
        {images.map((image, index) => (
          <img
            key={"portfolio-" + image.name}
            src={image.thumbnail}
            onClick={() => {
              setFullscreen(true);
              setGalleryIndex(index);
            }}
            className="transition-all duration-500 
              ease-in-out hover:shadow-gallery
              transform hover:scale-105 cursor-pointer"/>
        ))}
      </div>
      {isFullscreen && <Gallery images={images} closeFunction={setFullscreen} initialIndex={galleryIndex}/>}
    </div>
  );
};

export default Portfolio;
