import React, { FunctionComponent } from "react";

const Section: FunctionComponent = (props) => (
  <section className="h-screen overflow-hidden">{props.children}</section>
);

export default Section;
