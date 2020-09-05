type LinkProps = {
  name: string;
  url: string;
};

const Link = ({ name, url }: LinkProps) => (
  <a className="text-white hover:text-yellow uppercase" href={url}>
    {name}
  </a>
);

export default Link;
