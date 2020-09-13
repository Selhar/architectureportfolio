import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import About from "../components/About";
import Margin from "../components/Margin";

export default function IndexPage() {
  return (
    <>
      <Menu />
      <Section>
        <Gallery
          images={[
            "portfolio/1.png",
            "portfolio/2.png",
            "portfolio/3.png",
            "portfolio/4.png",
            "portfolio/5.png",
          ]}
        />
      </Section>
      <Section>
        <Margin />
        <About />
      </Section>
      <Section>
        <div className={"bg-purple-600 w-full h-full"} />
      </Section>
    </>
  );
}
