import React from "react";
import {email, phone} from "../../data"

import AltLogo from "../AltLogo"

export default () => (
  <div className="align-middle py-10">
    <div className="font-bold tracking-wider text-center w-100 flex flex-col lg:block">
      <span>{phone}</span>
      <AltLogo />
      <span>{email}</span>
    </div>
  </div>
);