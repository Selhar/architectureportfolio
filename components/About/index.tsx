import { AboutPage, Breakpoint, Margin } from "../utils/constants";
import { Title } from "../Title";

const About = () => (
  <div
    className={`flex flex-col h-full w-full justify-center ${Margin.section}`}
  >
    <div className={`flex my-0 mx-auto ${Breakpoint}:justify-center`}>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img
          src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg"
          className={"w-full h-full"}
        />
      </div>

      <div className={"text-white min-w-md max-w-md rounded-lg p-4 pt-0 "}>
        <Title text={AboutPage.title} />
        <p>{AboutPage.paragraphs[1]}</p>
      </div>
    </div>
    <div className={"mt-2 flex my-0 mx-auto justify-center"}>
      <div
        className={`text-white min-w-md max-w-md rounded-lg p-4 ${Breakpoint}:pl-0`}
      >
        <p>{AboutPage.paragraphs[2]}</p>
      </div>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img
          src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg"
          className={"w-full h-full"}
        />
      </div>
    </div>
  </div>
);

export default About;
