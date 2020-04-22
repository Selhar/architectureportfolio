import React, {useState, useEffect} from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default ({images}) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  });


  return (
    <div className="h-full w-full cursor-move max-h-full max-w-full overflow-hidden">
      <CarouselProvider
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={images.length}
        hasMasterSpinner
        isPlaying
        infinite
        interval={2000}
      >
        <div>
          <Slider>
            {images.map((image, index) => (
              <Slide index={index} key={"slide" + index}>
                <Image src={image} hasMasterSpinner key={"image" + index } />
              </Slide>
            ))}
          </Slider>
        </div>
      </CarouselProvider>
    </div>
  );
}