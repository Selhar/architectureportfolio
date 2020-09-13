import Whatsapp from "./Whatsapp";
import Instagram from "./Instagram";
import Hamburguer from "./Hamburguer";
import { Icons } from "../utils/enums";

type Icon = {
  iconName: Number;
  classes?: string;
};

const Icon = ({ iconName, classes }: Icon) => {
  switch (iconName) {
    case Icons.whatsapp:
      return <Whatsapp classes={classes} />;
    case Icons.instagram:
      return <Instagram classes={classes} />;
    case Icons.hamburguer:
      return <Hamburguer classes={classes} />;
    default:
      return <p>unavailable icon</p>;
  }
};

export default Icon;
