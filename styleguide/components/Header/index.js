import React, { useState } from "react";

import Logo from "../Logo";
import Menu from "../Menu";
import Social from "../Social";

import { menuItems } from "../../data"
import "./index.css"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState("absolute p-4 ");
  const [logoSize, setLogoSize] = useState("w-56")

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -30) {
        setScrolled("fixed bg-grey sm:pt-2 sm:pb-2 ")
        setLogoSize("w-56")
      } else {
        setScrolled("absolute pt-4 pb-4 ")
        setLogoSize("w-48")
      }
    }
  )
  return (
    <div className={scrolled + "pl-4 sm:p-4 sm:p-0 sm:justify-around flex flex-row justify-between items-center z-10 transition-menu w-full left-0 top-0"}>
      <Logo open={open} logoSize={logoSize}/>
      <Menu items={menuItems} open={open} setOpen={setOpen} classes="" />
      <Social classes={"sm:flex flex-row hidden"}/>
    </div>
  )
}

export default Header;