import { LogoLayout, LogoSizes } from "../utils/enums";

type Logo = {
  type: LogoLayout;
  size: LogoSizes;
};

const Logo = ({ type, size }: Logo) => (
  <a href="#">
    <img src={type} className="w-56" />
  </a>
);

export default Logo;
