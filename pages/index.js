import React from "react";
import Header from "../styleguide/components/Header"

import "../style.css";

const Home = () => (
  <div className="p-4 shadow rounded bg-white">
    <Header />
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
  </div>
);

export default Home;
