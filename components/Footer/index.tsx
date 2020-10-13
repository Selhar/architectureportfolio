import Logo from "../Logo";
import { LogoLayout, LogoSizes } from "../utils/enums";
import { Telefone, Email } from "../utils/constants";

const Footer = () => (
  <div className="py-16 bg-lightGrey" id="contato">
    <div className="font-bold tracking-wider flex justify-center items-center lg:flex-row flex-col">
      <span>{Telefone}</span>
      <Logo
        src={LogoLayout.logoLegendaVertical}
        url="#"
        classes={`block`}
        itemClasses={LogoSizes.large}
      />
      <span>{Email}</span>
    </div>
  </div>
);

export default Footer;
