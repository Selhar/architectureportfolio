import React from "react";

export default ({classes, id, ...props}) => (
  <div id={id} className={classes + " py-10 sm:py-20"}>
    {props.children}
  </div>
)