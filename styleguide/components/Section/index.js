import React from "react";

export default ({classes, id, ...props}) => (
  <div id={id} className={classes}>
    {props.children}
  </div>
)