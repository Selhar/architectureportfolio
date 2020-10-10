import Logo from "../Logo";
import { LogoLayout, LogoSizes } from "../utils/enums";
import { Breakpoint } from "../utils/constants";

const Footer = () => (
  <div className="py-16 bg-lightGrey">
    <div className="font-bold tracking-wider flex justify-center items-center lg:flex-row flex-col">
      <span>{21312312312312}</span>
      <Logo
        src={LogoLayout.logoLegendaVertical}
        url="#"
        classes={`block`}
        itemClasses={LogoSizes.large}
      />
      <span>{312312312312}</span>
    </div>
  </div>
);

export default Footer;
