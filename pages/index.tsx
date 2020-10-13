import Head from "next/head";

import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { CarouselImages, PortfolioImages } from "../components/utils/constants";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Modelagem e rederização de objetos 3D</title>
        <meta
          property="og:title"
          content="Modelagem e rederização de objetos 3D"
          key="title"
        />
      </Head>
      <Menu />
      <Section>
        <Carousel
          images={[
            CarouselImages[1],
            CarouselImages[1],
            CarouselImages[1],
            CarouselImages[1],
          ]}
        />
      </Section>
      <About />
      <Portfolio
        images={[
          PortfolioImages[1],
          PortfolioImages[1],
          PortfolioImages[1],
          PortfolioImages[1],
        ]}
      />
      <Contact />
      <Footer />
    </>
  );
}
