import Link from "../Link";
import { LinkTypes } from "../utils/enums";
import { legendaLogo } from "../../data";

type Logo = {
  src: string;
  url: string;
  itemClasses: string;
};

const Logo = ({ src, url, itemClasses }: Logo) => (
  <Link
    alt={legendaLogo}
    type={LinkTypes.Logo}
    itemClasses={itemClasses}
    src={src}
    url={url}
  />
);

export default Logo;
