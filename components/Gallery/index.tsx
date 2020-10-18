import React, { useState, useEffect } from "react";

import { CarouselImage } from "../utils/constants";

type Gallery = {
  images: Array<CarouselImage>;
  currentImageIndex: number;
};

enum Direction {
  left,
  right,
}

type ArrowDirection = {
  direction: Direction;
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

const Gallery = ({ images, currentImageIndex }: Gallery) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImageClass, setCurrentImageClass] = useState(processCurrentImageClass(currentImage));
  const AUTOSCROLLING_DURATION = 5000;

  useEffect(() => {
    let timer = setInterval(
      () =>
        {setCurrentImage(
          currentImage == images.length * 100 - 100 ? 0 : currentImage + 100
        ), setCurrentImageClass("translate-x-"+currentImage)},
      AUTOSCROLLING_DURATION
    );
    return () => clearInterval(timer);
  });

  const isUpperBound = () => currentImage < (images.length - 1) * 100;
  const isLowerBound = () => currentImage > 0;

  const nextImage = () => {
    isUpperBound() && setCurrentImage(currentImage + 100);
  };

  const previousImage = () => {
    isLowerBound() && setCurrentImage(currentImage - 100);
  };

  const Arrow = ({ direction }: ArrowDirection) => (
    <div
      className={`absolute top-1/2 ${
        direction == Direction.left
          ? " border-l-2 border-b-2 ml-4 lg:ml-12 left"
          : " border-r-2 border-t-2 mr-4 lg:mr-12 right"
      }-0 text-2xl lg:text-6xl font-hairline z-50 
        cursor-pointer leading-snug align-middle
        border-yellow border-solid 
        w-10 h-10 lg:w-20 lg:h-20
        transform rotate-45`}
    />
  );

  return (
    <>
      <div
        className={`flex transition duration-500 all ease-in-out transform translate-x-${currentImage}`}
      >
        {images.map((image) => (
          <div
            key={"gallery-" + image.name}
            className={"flex-shrink-0 relative w-full m-auto"}
          >
            <div
              onClick={previousImage}
              className={`${isLowerBound() ? "block" : "hidden"}`}
            >
              <Arrow direction={Direction.left} />
            </div>
            <div
              onClick={nextImage}
              className={`${isUpperBound() ? "block" : "hidden"}`}
            >
              <Arrow direction={Direction.right} />
            </div>
            <div
              className={
                "bottom-0 right-1/2 transform translate-x-1/2 absolute mb-4"
              }
            >
              <span
                className={
                  "bg-black bg-opacity-75 p-2 rounded-md whitespace-no-wrap"
                }
              >
                {image.description}
              </span>
            </div>
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
    </>
  );
};

export default Gallery;
