import React from "react";

import Logo from "../Logo";
import Menu from "../Menu";
import Social from "../Social";

import {menuItems} from "../../data"

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <Logo />
      <Menu items={menuItems}/>
      <Social />
    </div>
  )
}

export default Header;