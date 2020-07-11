import React from "react";
import { instagram, whatsapp } from "../../data";
import Instagram from "../Instagram";
import Whatsapp from "../Whatsapp";

export default ({classes}) => (
  <div className={classes}>
    <a href={instagram} target="_newt">
      <Instagram className="w-auto h-4 cursor-pointer fill-white hover:fill-yellow"  />
    </a>
    <a href={whatsapp} target="_newt" >
      <Whatsapp className="w-auto h-4 ml-4 cursor-pointer fill-white hover:fill-yellow"/>
    </a>
  </div>
)