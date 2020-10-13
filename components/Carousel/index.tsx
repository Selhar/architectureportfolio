import React, { useState, useEffect } from "react";

type Image = {
  "4k": string;
  "1440p": string;
  "1080p": string;
  mobile: string;
};

type Carousel = {
  images: Array<Image>;
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
      className={`flex transition duration-500 
        all ease-in-out transform translate-x-${currentImage}`}
    >
      {images.map((image) => (
        <div key={image.mobile} className={"flex-shrink-0 w-full m-auto"}>
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
  );
};
export default Carousel;
