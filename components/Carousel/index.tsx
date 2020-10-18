import React, { useState, useEffect } from "react";

import { CarouselImage } from "../utils/constants";

type Carousel = {
  images: Array<CarouselImage>;
  galleryMode?: boolean;
};

const processCurrentImageClass = (value: number) => {
  switch(value) {
    case 0:
      return "translate-x-0";
    case 100:
      return "translate-x-100";
    case 200:
      return "translate-x-200";
    case 300:
      return "translate-x-300";
    case 400:
      return "translate-x-400";
    case 500:
      return "translate-x-500";
    case 600:
      return "translate-x-600";
  }
}

const Carousel = ({ images }: Carousel) => {
  const [currentImage, setcurrentImage] = useState(0);
  const [currentImageClass, setCurrentImageClass] = useState(processCurrentImageClass(currentImage));
  const AUTOSCROLLING_DURATION = 5000;

  useEffect(() => {
    let timer = setInterval(
      () =>
        {setcurrentImage(
          currentImage == images.length * 100 - 100 ? 0 : currentImage + 100
        ), setCurrentImageClass("translate-x-"+currentImage)},
      AUTOSCROLLING_DURATION
    );
    return () => clearInterval(timer);
  });

  return (
    <div
      className={`flex transition duration-500 
        all ease-in-out transform ${currentImageClass}`}
    >
      {images.map((image) => (
        <div
          key={"carousel-" + image.name}
          className={"flex-shrink-0 w-full m-auto"}
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
            <source media="(min-width:4095px)" srcSet={image["2160p"]} />
            <img
              className={
                "flex-grow-0 flex-shrink-0 max-w-screen w-full max-w-screen h-auto max-h-screen m-auto "
              }
              src={image.mobile}
            />
          </picture>
        </div>
      ))}
    </div>
  );
};
export default Carousel;
