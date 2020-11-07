import React, { useState } from "react";

import Icon from "../Icon"
import Splash from "../Splash"
import { Icons } from "../utils/enums"
import { Image } from "../utils/types"
import { orderImages } from "../utils/funcs"

enum Direction {
  left,
  right,
}

type setDirection = {
  direction: Direction;
};

const Arrow = ({ direction }: setDirection) => (
  <div
    className={`absolute top-1/2 ${
      direction == Direction.left
        ? " border-l-2 border-b-2 ml-4 lg:ml-12 left"
        : " border-r-2 border-t-2 mr-4 lg:mr-12 right"
    }-0 text-2xl lg:text-6xl font-hairline z-50 
      cursor-pointer leading-snug align-middle
      border-yellow border-solid 
      w-10 h-10 lg:w-20 lg:h-20
      transform rotate-45 focus:outline-none`}
  />
);

type Gallery = {
  images: Array<Image>,
  closeFunction: Function,
  initialIndex?: number,
}

const proccessCurrentImage = (
  direction: Direction,
  currentImage: number,
  isLastImage: boolean,
  isFirstImage: boolean) => {
  if (direction == Direction.left && !isFirstImage) {
    return currentImage - 1;
  } else if(direction == Direction.right && !isLastImage) {
    return currentImage + 1;
  } else {
    return 0;
  }
}

const Gallery = ({ images, closeFunction, initialIndex = 0 }: Gallery) => {
  const [currentImage, setcurrentImage] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState("transform -translate-x-100");
  const [disabled, setDisabled] = useState(false);

  let isLastImage = currentImage + 1 >= images.length;
  let isFirstImage = currentImage == 0;
  let transitionImage = ({ direction }: setDirection) => {
    if (disabled) {
      return;
    }
    setDisabled(true);
    setIsTransitioning(`transition-transform duration-500 
      ease-carousel transform ${
          direction == Direction.left ? "translate-x-0" : "-translate-x-200"
      }`);
    setTimeout(() => {
      setcurrentImage(proccessCurrentImage(direction, currentImage, isLastImage, isFirstImage));
      setIsTransitioning("transform -translate-x-100");
      setDisabled(false);
    }, 500);
  }
  
  return (
    <div className="fixed top-0 bg-black w-screen h-screen z-50 bg-opacity-75">
      <div className="right-0 fixed p-4 mr-4 z-50" onClick={() => closeFunction(false)}>
        <Icon
          iconName={Icons.cross}
          classes="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer" />
      </div>
      <div className={`fixed top-1/2 left-0 p-4 ml-4 z-50 transform -translate-y-1/2 ${isFirstImage ? "hidden" : "block"}`}
        onClick={() => transitionImage({ direction: Direction.left })}
      >
        <Arrow direction={Direction.left} />
      </div>
      <div className={`fixed top-1/2 right-0 p-4 mr-4 z-50 transform -translate-y-1/2 ${isLastImage ? "hidden" : "block"}`}
        onClick={() => transitionImage({ direction: Direction.right })}
      >
        <Arrow direction={Direction.right} />
      </div>
      <div className={`flex ${isTransitioning}`}>
        {images.map((image, index) => (
          <Splash individualImageClasses="h-auto max-h-screen max-w-screen my-0 mx-auto" image={image}
            classes={`flex-shrink-0 ${orderImages(index, currentImage, isLastImage, images.length)}` }
            />
        ))}
      </div>
    </div>
  )
};

export default Gallery;




