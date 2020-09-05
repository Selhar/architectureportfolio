import Link from "../Link";
import { Direction } from "../utils/enums";

type LinkList = {
  items: Array<Item>;
  direction?: Direction;
};

type Item = {
  name: string;
  url: string;
};

const LinkedList = ({ items, direction }: LinkList) => (
  <ul className={"flex " + direction}>
    {items.map((item) => (
      <Link
        key={"ul-" + item.name + item.url}
        name={item.name}
        url={item.url}
      />
    ))}
  </ul>
);

export default LinkedList;
