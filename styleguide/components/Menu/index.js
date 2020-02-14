import React from "react";

export default ({items}) => (
  <ul className="uppercase flex flex-row transform -translate-x-16">
    {
      items.map(item => (
        <li key={item} className="mr-4">{item}</li>
      ))
    }
  </ul>
)