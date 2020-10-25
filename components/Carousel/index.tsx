
import React, { useState, useEffect } from "react";

import { Image } from "../utils/types";
import Splash from "../Splash"
import { orderImages } from "../utils/funcs"

type Carousel = {
  images: Array<Image>;
};

const Carousel = ({ images }: Carousel) => {
  const [currentImage, setcurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState("transform -translate-x-100");
  const AUTOSCROLLING_DURATION = 5000;
  let isLastImage = currentImage + 1 >= images.length

  useEffect(() => {
    let timer = setInterval(() => {
      setIsTransitioning("transition-transform duration-500 ease-carousel transform -translate-x-200");
      setTimeout(() => {
        setcurrentImage(isLastImage ? 0 : currentImage + 1);
        setIsTransitioning("transform -translate-x-100");
      }, 500);
    },
      AUTOSCROLLING_DURATION
    );
    return () => clearInterval(timer);
  });

  return (
    <div
    className={`flex ${isTransitioning}`}
    >
      {images.map((image, index) => (
        <Splash image={image}
          classes={`flex-shrink-0 ${orderImages(index, currentImage, isLastImage, images.length)}` }
        />
      ))}
    </div>
  );
};
export default Carousel;
