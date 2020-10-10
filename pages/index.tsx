import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <>
      <Menu />
      <Section>
        <Carousel
          images={[
            "portfolio/1.png",
            "portfolio/2.png",
            "portfolio/3.png",
            "portfolio/4.png",
            "portfolio/5.png",
          ]}
        />
      </Section>
      <About />
      <Portfolio
        images={[
          "/portfolio/1.png",
          "/portfolio/2.png",
          "/portfolio/3.png",
          "/portfolio/4.png",
          "/portfolio/5.png",
          "/portfolio/6.png",
          "/portfolio/7.png",
          "/portfolio/8.png",
          "/portfolio/a.png",
        ]}
      />
      <Contact />
    </>
  );
}
