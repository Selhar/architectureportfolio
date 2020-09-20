import React, { useState } from "react";

import { PortfolioPage, Breakpoint } from "../utils/constants";
import { Title } from "../Title";
import Gallery from "../Gallery";

type Portfolio = {
  images: Array<string>;
};

const Portfolio = ({ images }: Portfolio) => {
  const [visibleCarousel, setVisibleCarousel] = useState(-1);

  const ImageList = () => {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={image}
            className="transition-all duration-500 ease-in-out hover:shadow-gallery transform hover:scale-105 cursor-pointer"
            onClick={() => setVisibleCarousel(index)}
          >
            <img src={image} />
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div
        className={`${
          visibleCarousel > -1 ? "flex" : "hidden"
        } fixed top-0 left-0 w-screen h-screen z-50 transition-all duration-300 ease-in-out text-yellow`}
      >
        <div
          className={
            "fixed z-50 top-0 right-0 text-6xl uppercase mr-8 cursor-pointer shadow-gallery bg-black leading-tight p-2 mt-4 rounded-full"
          }
          onClick={() => setVisibleCarousel(-1)}
        >
          x
        </div>
        <Gallery images={images} currentImageIndex={visibleCarousel * 100} />
      </div>
      <Title classes="text-center" text={PortfolioPage.title}></Title>
      <div
        className={`grid grid-flow-row grid-cols-1 gap-8 w-11/12 my-0 mx-auto ${Breakpoint}:grid-cols-3`}
      >
        <ImageList />
      </div>
    </div>
  );
};

export default Portfolio;
