import React, { useState } from "react";

import LinkList from "../LinkList";
import Logo from "../Logo";
import { LogoLayout, LogoSizes, LinkTypes, Icons } from "../utils/enums";

import { Breakpoint } from "../utils/constants";

import Icon from "../Icon";
import { headerMenu, contato } from "../../data";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`shadow-menu px-4 justify-between fixed w-screen z-10 flex ${Breakpoint}:justify-around ${Breakpoint}:px-0 items-center bg-transparent py-4`}
      >
        <Logo
          src={LogoLayout.logoLegendaHorizontal}
          url="#"
          classes={`${Breakpoint}:block hidden`}
          itemClasses={LogoSizes.small}
        />

        <Logo
          src={LogoLayout.logo}
          url="#"
          classes={`${Breakpoint}:hidden block`}
          itemClasses={LogoSizes.xs}
        />

        <LinkList
          items={headerMenu}
          classes={`hidden ${Breakpoint}:flex justify-around uppercase col-row px-12`}
          itemClasses="mr-5 font-bold tracking-wider hover:text-yellow"
          type={LinkTypes.Text}
        />

        <LinkList
          items={contato.socialNetworks}
          type={LinkTypes.Icon}
          classes={`${Breakpoint}:flex hidden col-row`}
          itemClasses="fill-white hover:fill-yellow ml-4 w-4"
          target="_newtarget"
        />
        <div onClick={() => setOpen(!open)}>
          <Icon
            iconName={Icons.hamburguer}
            classes={`${Breakpoint}:hidden fill-yellow`}
          />
        </div>
      </div>
      <div
        className={`${
          open ? "w-screen" : "w-0"
        } fixed top-0 h-screen bg-black lg:hidden transition-all duration-500 ease-in-out z-20`}
      >
        <div className={"flex flex-row justify-between p-4"}>
          <LinkList
            items={headerMenu}
            classes={`${
              open ? "flex" : "hidden"
            } flex-col justify-around uppercase text-2xl col-row`}
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
