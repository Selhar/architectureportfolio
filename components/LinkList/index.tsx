import Link from "../Link";
import { Direction, LinkTypes } from "../utils/enums";

type LinkList = {
  items: Array<Item>;
  direction?: Direction;
  classes?: string;
  itemClasses?: string;
  type: Number;
  target?: string;
};

type Item = {
  name: string;
  url: string;
  src?: string;
  iconName?: Number;
};

const LinkedList = ({
  items,
  direction,
  classes,
  itemClasses,
  type,
  target,
}: LinkList) => (
  <ul className={"flex" + " " + direction + " " + classes}>
    {items.map((item) => (
      <Link
        iconName={item.iconName}
        key={"ul-" + item.name + item.url}
        name={item.name}
        url={item.url}
        src={item.src}
        type={type}
        classes={itemClasses}
        target={target}
      />
    ))}
  </ul>
);

export default LinkedList;
