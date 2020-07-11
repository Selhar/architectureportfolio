import React, {useState} from "react";
import HamburguerIcon from "../Icons/Hamburguer";
import "./index.css"

const Menu = ({items, classes, isMobile, open, setOpen}) => (
  <ul className={classes}>
    {
      items.map(item => (
        <li key={"li" + item}>
          <a href={item[1]} key={item} 
            className={"mr-4 font-bold cursor-pointer hover:text-yellow text-white"}
            onClick={() => isMobile ? setOpen(!open) : null}>
            {item[0]}
          </a>
        </li>
      ))
    }
  </ul>
)
export default ({items, open, setOpen, classes}) => (
  <div className={classes}>
    <Menu items={items} classes={"sm:flex hidden flex-row flex-wrap uppercase justify-center tracking-wider p-4"} />
    <HamburguerIcon classes={"sm:hidden fill-current hover:fill-yellow"} open={open} setOpen={setOpen} />
    <div className={"w-screen h-screen left-outofbounds flex flex-row justify-between top-0 absolute h-16 bg-orange w-full p-4 transition-left duration-500 ease-out" + (open ? " left-0" : "")} >  
      <Menu isMobile items={items} classes="sm:hidden uppercase tracking-wider text-black" setOpen={setOpen} open={open} />
      <span className="font-bold cursor-pointer pd-2 pl-2" onClick={() => setOpen(!open)}>X</span>
    </div>
  </div>
)