import { PortfolioPage, Breakpoint } from "../utils/constants";
import { Title } from "../Title";

const Portfolio = () => {
  type ImageItem = {
    item: string;
  };

  const ImageItem = ({ item }: ImageItem) => (
    <div className=" transition-all duration-500 ease-in-out hover:shadow-gallery transform hover:scale-105 cursor-pointer">
      <img src={item} />
    </div>
  );

  return (
    <div>
      <Title classes="text-center" text={PortfolioPage.title}></Title>
      <div
        className={`grid grid-flow-row grid-cols-1 gap-8 w-11/12 my-0 mx-auto ${Breakpoint}:grid-cols-3`}
      >
        <ImageItem item={"/portfolio/1.png"} />
        <ImageItem item={"/portfolio/2.png"} />
        <ImageItem item={"/portfolio/3.png"} />
        <ImageItem item={"/portfolio/4.png"} />
        <ImageItem item={"/portfolio/5.png"} />
        <ImageItem item={"/portfolio/6.png"} />
        <ImageItem item={"/portfolio/7.png"} />
        <ImageItem item={"/portfolio/8.png"} />
      </div>
    </div>
  );
};

export default Portfolio;
