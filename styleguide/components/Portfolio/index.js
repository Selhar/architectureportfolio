import React from "react";
import Gallery from "../Gallery";

const images = [
  {
    src: '/static/portfolio/Fachada Residencial/14 grande.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Fachada Residencial/final 2.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Interiores/14.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Interiores/7.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Interiores/16.1.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Interiores/20.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Interiores/26.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/lavandacoletiva/lavanderia08.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/lavandacoletiva/LAVANDERIA11.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/static/portfolio/Playground - Piscina/PISCINA - Àrea Gourmet.jpg',
    width: 4,
    height: 3
  },
];

export default () => (
  <div className="w-10/12 m-auto" >
    <h1 className="font-bold uppercase tracking-widest text-center text-3xl mb-3">Portfolio</h1>
    <div>
      <Gallery images={images}
      />
    </div>
  </div>
);