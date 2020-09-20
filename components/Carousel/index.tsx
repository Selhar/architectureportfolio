import React, { useState, useEffect } from "react";

type Carousel = {
  images: Array<string>;
  galleryMode?: boolean;
};

const Carousel = ({ images }: Carousel) => {
  const [currentImage, setcurrentImage] = useState(0);

  const AUTOSCROLLING_DURATION = 6000;

  useEffect(() => {
    let timer = setInterval(
      () =>
        setcurrentImage(
          currentImage == images.length * 100 - 100 ? 0 : currentImage + 100
        ),
      AUTOSCROLLING_DURATION
    );
    return () => clearInterval(timer);
  });

  return (
    <div
      className={`flex transition duration-500 all ease-in-out transform translate-x-${currentImage}`}
    >
      {images.map((image) => (
        <div key={image} className={"flex-shrink-0 w-full m-auto"}>
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
  );
};
export default Carousel;
