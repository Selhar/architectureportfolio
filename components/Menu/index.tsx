import LinkList from "../LinkList";
import Logo from "../Logo";
import {
  LogoLayout,
  LogoSizes,
  Direction,
  LinkTypes,
  Icons,
} from "../utils/enums";
import { headerMenu, contato } from "../../data";

const Menu = () => (
  <div className="flex justify-around items-center bg-black py-4">
    <Logo
      src={LogoLayout.logoLegendaHorizontal}
      url="#"
      itemClasses={LogoSizes.large}
    />
    <LinkList
      items={headerMenu}
      direction={Direction.row}
      classes="justify-around uppercase"
      itemClasses="mr-5 font-bold tracking-wider hover:text-yellow"
      type={LinkTypes.Text}
    />
    <LinkList
      items={contato.socialNetworks}
      direction={Direction.row}
      type={LinkTypes.Icon}
      itemClasses="fill-white hover:fill-yellow ml-4 w-4"
      target="_newtarget"
    />
  </div>
);

export default Menu;
