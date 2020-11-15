import React from "react";
import { Image } from "../utils/types";
import { format, buildCloudinaryUrl } from "../utils/constants"
type Picture = {
  image: Image;
  imageClasses?: string;
}

const Picture = ({ image, imageClasses }: Picture) => (
  <picture>
    <source className={imageClasses}
      media="(min-width: 1024px) and (max-width:2559px)"
      srcSet={buildCloudinaryUrl(format[1080], image.name, false)}
    />
    <source className={imageClasses}
      media="(min-width: 2560px) and (max-width:4095px)"
      srcSet={buildCloudinaryUrl(format[1440], image.name, false)}
    />
    <source className={imageClasses} media="(min-width:4095px)"
      srcSet={buildCloudinaryUrl(format[0], image.name, false)}
    />
    <img className={imageClasses}
      src={buildCloudinaryUrl(format[0], image.name, true)}
    />
  </picture>
)

export default Picture;