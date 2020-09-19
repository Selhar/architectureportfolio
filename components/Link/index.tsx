import Icon from "../Icon";
import { Icons, LinkTypes } from "../utils/enums";

type Link = {
  name?: string;
  url: string;
  src?: string;
  classes?: string;
  alt?: string;
  type: Number;
  iconName?: Number;
  itemClasses?: string;
  target?: string;
};

const Link = ({
  name,
  url,
  src,
  classes,
  type,
  iconName = 999,
  itemClasses,
  target = "",
}: Link) => {
  const renderType = () => {
    switch (type) {
      case LinkTypes.Icon:
        return <Icon iconName={iconName} classes={itemClasses} />;
      case LinkTypes.Text:
        return name;
      case LinkTypes.Logo:
        return <img src={src} alt={name} className={itemClasses} />;
      default:
        <span>LinkType not found</span>;
    }
  };

  return (
    <a href={url} className={classes} target={target}>
      {renderType()}
    </a>
  );
};

export default Link;
