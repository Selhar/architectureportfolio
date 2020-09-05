type Link = {
  name: string;
  url: string;
};

const Link = ({ name, url }: Link) => (
  <a className="text-white hover:text-yellow uppercase" href={url}>
    {name}
  </a>
);

export default Link;
