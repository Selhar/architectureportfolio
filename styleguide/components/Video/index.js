import React from "react";

export default ({videosrc}) => (
  <video id="background-video" loop muted autoPlay className="w-full">
    <source src={videosrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);