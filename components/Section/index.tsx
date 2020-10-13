import React, { FunctionComponent } from "react";

const Section: FunctionComponent = (props) => (
  <section className="overflow-hidden mb-16 max-h-screen min-h-full">
    {props.children}
  </section>
);

export default Section;
