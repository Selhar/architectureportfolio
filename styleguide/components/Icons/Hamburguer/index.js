import React from "react";
import "./index.css"

export default ({classes, open, setOpen}) => (
  <div onClick={() => setOpen(!open)} className={"p-8 " + classes + (open ? " hidden" : " block")}>
    <div className="hamburguer-row bg-yellow" />
    <div className="hamburguer-row bg-yellow" />
    <div className="hamburguer-row bg-yellow" />
  </div>
)