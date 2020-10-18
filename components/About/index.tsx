import { AboutPage, Margin, AboutImages } from "../utils/constants";
import { Title } from "../Title";

const About = () => (
  <div
    id="sobre"
    className={`flex flex-col h-full w-full 
      justify-center ${Margin.section}`}
  >
    <div className={`flex my-0 mx-auto lg:justify-center`}>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src={AboutImages[1]["1080p"]} className={"w-full h-full"} />
      </div>

      <div className={"text-white min-w-md max-w-md rounded-lg p-4 pt-0 "}>
        <Title text={AboutPage.title} />
        <p>{AboutPage.paragraphs[1]}</p>
      </div>
    </div>
    <div className={"mt-2 flex my-0 mx-auto justify-center"}>
      <div className={`text-white min-w-md max-w-md rounded-lg p-4 lg:pl-0`}>
        <p>{AboutPage.paragraphs[2]}</p>
      </div>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src={AboutImages[2]["1080p"]} className={"w-full h-full"} />
      </div>
    </div>
  </div>
);

export default About;
