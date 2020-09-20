import React, { useState, useEffect } from "react";

type Gallery = {
  images: Array<string>;
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
  console.log(currentImage, currentImageIndex);

  useEffect(() => {
    setCurrentImage(currentImageIndex);
  }, [currentImageIndex]);

  const isUpperBound = () => currentImage < (images.length - 1) * 100;
  const isLowerBound = () => currentImage > 0;

  const nextImage = () => {
    isUpperBound() && setCurrentImage(currentImage + 100);
  };

  const lastImage = () => {
    isLowerBound() && setCurrentImage(currentImage - 100);
  };

  const Arrow = ({ direction }: ArrowDirection) => (
    <div
      className={`absolute top-1/2 ${
        direction == Direction.left ? "ml-8 left" : "mr-8 right"
      }-0 text-6xl z-50 shadow-gallery cursor-pointer bg-black leading-snug rounded-md align-middle`}
    >
      {direction == Direction.left ? "<" : ">"}
    </div>
  );

  return (
    <>
      <div
        className={`flex transition duration-500 all ease-in-out transform translate-x-${currentImage}`}
      >
        {images.map((image) => (
          <div
            key={"gallery-" + image}
            className={"flex-shrink-0 relative w-full m-auto"}
          >
            <div
              onClick={lastImage}
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
            <picture>
              <source
                media="(max-width:1024px)"
                srcSet={`http://wonderfulengineering.com/wp-content/uploads/2016/02/mobile-wallpaper-3.jpg`}
              />
              <img
                className={
                  "flex-grow-0 flex-shrink-0 max-w-screen w-full max-w-screen h-auto max-h-screen m-auto "
                }
                src={image}
              />
            </picture>
          </div>
        ))}
      </div>
      <div
        className={
          "absolute bottom-0 right-1/2 transform translate-x-1/2 w-full h-24 bg-black overflow-hidden opacity-0 hover:opacity-100 transition-all duration-500 ease-out"
        }
      >
        <div className={"flex flex-row "}>
          {images.map((image, index) => (
            <img
              onClick={() => setCurrentImage(index * 100)}
              className={"flex-grow flex-shrink w-0"}
              src={image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
