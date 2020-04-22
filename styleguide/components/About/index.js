import React from "react";


export default () => (
  <div className="flex flex-row justify-between xl:w-2/3 m-auto bg-yellow">
    <div className="sm:mr-2 sm:w-2/5 text-justify p-4 py-8">
      <h1 className="uppercase mb-1 tracking-widest font-bold font text-3xl text-center">
        O estúdio
      </h1>
      <span className="sm:pl-4 font-thin">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      </span>
    </div>
    <div className="hidden sm:block h-128 w-1/2">
      <img className="h-full w-auto" src="/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg" />
    </div>
  </div>
)