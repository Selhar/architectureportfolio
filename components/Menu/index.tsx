import React, { useState } from "react";

import LinkList from "../LinkList";
import Logo from "../Logo";
import {
  LogoLayout,
  LogoSizes,
  Direction,
  LinkTypes,
  Icons,
  Media,
} from "../utils/enums";

import Icon from "../Icon";
import { headerMenu, contato } from "../../data";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`px-4 justify-between fixed w-screen z-10 flex ${Media.breakpoint}:justify-around ${Media.breakpoint}:px-0 items-center bg-transparent py-4`}
      >
        <Logo
          src={LogoLayout.logoLegendaHorizontal}
          url="#"
          classes={`${Media.breakpoint}:block hidden`}
          itemClasses={LogoSizes.small}
        />

        <Logo
          src={LogoLayout.logo}
          url="#"
          classes={`${Media.breakpoint}:hidden block`}
          itemClasses={LogoSizes.xs}
        />

        <LinkList
          items={headerMenu}
          direction={Direction.row}
          classes={`hidden ${Media.breakpoint}:flex justify-around uppercase px-12`}
          itemClasses="mr-5 font-bold tracking-wider hover:text-yellow"
          type={LinkTypes.Text}
        />

        <LinkList
          items={contato.socialNetworks}
          direction={Direction.row}
          type={LinkTypes.Icon}
          classes={`${Media.breakpoint}:flex hidden`}
          itemClasses="fill-white hover:fill-yellow ml-4 w-4"
          target="_newtarget"
        />
        <div onClick={() => setOpen(!open)}>
          <Icon
            iconName={Icons.hamburguer}
            classes={`${Media.breakpoint}:hidden fill-yellow`}
          />
        </div>
      </div>
      <div
        className={`${
          open ? "w-screen" : "w-0"
        } absolute top-0 h-screen bg-black lg:hidden transition-all duration-500 ease-in-out z-20 `}
      >
        <div className={"flex flex-row justify-between p-4"}>
          <LinkList
            items={headerMenu}
            direction={Direction.row}
            classes={`${
              open ? "flex" : "hidden"
            } flex-col justify-around uppercase  text-2xl `}
            itemClasses="mr-5 font-bold tracking-wider hover:text-yellow"
            type={LinkTypes.Text}
          />

          <span
            onClick={() => setOpen(!open)}
            className={`${
              open ? "absolute" : "hidden"
            } mr-4 text-4xl right-0 top-0`}
          >
            x
          </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
