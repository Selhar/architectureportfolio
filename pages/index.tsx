import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Menu />
      <Section>
        <Carousel
          images={[
            "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
            "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
            "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
            "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
            "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          ]}
        />
      </Section>
      <About />
      <Portfolio
        images={[
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
          "http://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Free-City-1080p-Background-HD.jpg",
        ]}
      />
      <Contact />
      <Footer />
    </>
  );
}
