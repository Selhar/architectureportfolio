import React from "react";
import {email, phone} from "../../data"

import AltLogo from "../AltLogo"

export default () => (
  <div className="m-auto w-full w-fit-content flex justify-center align-middle py-10">
    <div className="font-bold tracking-wider text-center  ">
      <span>{phone}</span>
      <AltLogo />
      <span>{email}</span>
    </div>
  </div>
);