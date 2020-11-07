import React from "react";
import { Image } from "../utils/types";

type Picture = {
  image: Image;
  imageClasses?: string;
}

const Picture = ({ image, imageClasses }: Picture) => (
  <picture>
    <source className={imageClasses}
      media="(min-width: 1024px) and (max-width:2559px)"
      srcSet={image["1080p"]}
    />
    <source className={imageClasses}
      media="(min-width: 2560px) and (max-width:4095px)"
      srcSet={image["1440p"]}
    />
    <source className={imageClasses} media="(min-width:4095px)" srcSet={image["2160p"]} />
    <img className={imageClasses}
      src={image.mobile}
    />
  </picture>
)

export default Picture;