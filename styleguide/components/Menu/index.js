import React from "react";

export default ({items}) => (
  <ul className="uppercase flex flex-row transform -translate-x-24 tracking-wider">
    {
      items.map(item => (
        <li key={item} className="mr-4 font-bold">{item}</li>
      ))
    }
  </ul>
)