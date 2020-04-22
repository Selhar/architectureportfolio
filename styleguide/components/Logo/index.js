import React from "react";
import "./index.css";

export default ({open, logoSize, classes}) => (
  <a href="/index" className={"w-56 "+ (open ? "hidden " : "block ") + classes}>
    <img className={"logo-transition hidden sm:block " + logoSize} src="/static/logohorizontal.svg" alt="Logo da empresa"/>
    <img className="sm:hidden w-8" src="/static/logo.svg" alt="Logo da empresa"/>
  </a>
)