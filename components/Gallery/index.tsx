import React, { useState, useEffect } from "react";

type Image = {
  "4k": string;
  "1440p": string;
  "1080p": string;
  mobile: string;
};

type Gallery = {
  images: Array<Image>;
  currentImageIndex: number;
};

enum Direction {
  left,
  right,
}

type ArrowDirection = {
  direction: Direction;
};

const Gallery = ({ images, currentImageIndex }: Gallery) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(currentImageIndex);
  }, [currentImageIndex]);

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
            key={"gallery-" + image["4k"]}
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
                Descrição do projeto
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
      </div>
    </>
  );
};

export default Gallery;
