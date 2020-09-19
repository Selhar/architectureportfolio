import React, { FunctionComponent } from "react";

const Section: FunctionComponent = (props) => (
  <section className="h-screen overflow-hidden mb-16">{props.children}</section>
);

export default Section;
