import React, { useState, useEffect } from "react";

type Gallery = {
  images: Array<string>;
};

const Gallery = ({ images }: Gallery) => {
  const [next, setNext] = useState(0);

  const AUTOSCROLLING_DURATION = 6000;

  useEffect(() => {
    let timer = setInterval(
      () => setNext(next == 400 ? 0 : next + 100),
      AUTOSCROLLING_DURATION
    );

    return () => clearInterval(timer);
  });

  return (
    <div
      className={`flex transition duration-500 all ease-in-out transform translate-x-${next}`}
    >
      {images.map((image) => (
        <div key={image} className={"flex-shrink-0 w-full m-auto"}>
          <img
            className={
              "flex-grow-0 flex-shrink-0 max-w-screen w-full max-w-screen h-auto max-h-screen m-auto "
            }
            src={image}
          />
        </div>
      ))}
    </div>
  );
};
export default Gallery;
