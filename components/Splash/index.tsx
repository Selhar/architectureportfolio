import React from "react";

import { Image } from "../utils/types"
import Picture from "../Picture"

type Splash = {
  image: Image;
  classes?: string,
  individualImageClasses?: string,
};

const Splash = ({ image, classes="", individualImageClasses="" }: Splash) => {

  return (
    <div className={`h-auto w-full ${classes}`}>
      <Picture imageClasses={individualImageClasses} image={image}/>
    </div>
  );
};
export default Splash;

