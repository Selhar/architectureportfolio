import React from "react";
type Cross = {
  classes?: string;
};

const Cross = ({ classes }: Cross) => (
  <svg className={classes} viewBox="6 6 18 18">
    <path
      d="M8 8L22 22"
      stroke="#ffc100"
      stroke-width="0.3"
      stroke-miterlimit="20"
    />
    <path
      d="M22 8L8 22"
      stroke="#ffc100"
      stroke-width="0.3"
      stroke-miterlimit="20"
    />
  </svg>
);

export default Cross;
