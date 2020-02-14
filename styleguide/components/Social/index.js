import React from "react";
import { instagram, whatsapp } from "../../data";
import Instagram from "../Instagram";
import Whatsapp from "../Whatsapp";

export default () => (
  <div className="flex flex-row">
    <a href={instagram}>
      <Instagram className="w-auto h-5" />
    </a>
    <a href={whatsapp}>
      <Whatsapp className="w-auto h-5 ml-4" />
    </a>
  </div>
)