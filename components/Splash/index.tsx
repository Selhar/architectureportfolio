import React from "react";

import { Image } from "../utils/types"
import Picture from "../Picture"

type Splash = {
  image: Image;
  classes?: string,
};

const Splash = ({ image, classes="" }: Splash) => {

  return (
    <div className={`h-auto w-full ${classes}`}>
      <Picture image={image}/>
    </div>
  );
};
export default Splash;

