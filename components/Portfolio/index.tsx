import React, { useState } from "react";

import { PortfolioPage } from "../utils/constants";
import Icon from "../Icon";
import { Icons } from "../utils/enums";
import { Title } from "../Title";
import Gallery from "../Gallery";

type Image = {
  "4k": string;
  "1440p": string;
  "1080p": string;
  mobile: string;
};

type Portfolio = {
  images: Array<Image>;
};

const Portfolio = ({ images }: Portfolio) => {
  const [visibleCarousel, setVisibleCarousel] = useState(-1);

  const ImageList = () => {
    return (
      <>
        {images.map((image, index) => (
          <div
            key={image["1440p"]}
            className={`transition-all duration-500 
              ease-in-out hover:shadow-gallery
              transform hover:scale-105 cursor-pointer`}
            onClick={() => setVisibleCarousel(index)}
          >
            <picture>
              <source
                media="(min-width: 1024px) and (max-width:2559px)"
                srcSet={image["1080p"]}
              />
              <source
                media="(min-width: 2560px) and (max-width:4095px)"
                srcSet={image["1440p"]}
              />
              <source media="(min-width:4095px)" srcSet={image["4k"]} />
              <img
                className={
                  "flex-grow-0 flex-shrink-0 max-w-screen w-full max-w-screen h-auto max-h-screen m-auto "
                }
                src={image.mobile}
              />
            </picture>
          </div>
        ))}
      </>
    );
  };

  return (
    <div id="portfolio" className="mb-16">
      <div
        className={`${
          visibleCarousel > -1 ? "flex bg-black" : "hidden"
        } fixed top-0 left-0 w-screen h-screen z-50
           transition-all duration-300 ease-in-out text-yellow`}
      >
        <div
          className={`fixed z-50 top-0 right-0 uppercase p-4 
            cursor-pointer leading-tight rounded-full`}
          onClick={() => setVisibleCarousel(-1)}
        >
          <Icon iconName={Icons.cross} classes="w-10 h-10 lg:w-16 lg:h-16" />
        </div>
        <Gallery images={images} currentImageIndex={visibleCarousel * 100} />
      </div>
      <Title classes="text-center" text={PortfolioPage.title}></Title>
      <div
        className={`grid grid-flow-row grid-cols-1
          gap-8 w-11/12 my-0 mx-auto lg:grid-cols-3`}
      >
        <ImageList />
      </div>
    </div>
  );
};

export default Portfolio;
