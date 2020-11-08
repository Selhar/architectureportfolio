import Head from "next/head";

import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PortfolioImages } from "../components/utils/constants";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>TSmodelagem3d: Modelagem, animação e render 3D</title>
        <meta
          property="og:title"
          content="TSmodelagem3d: Modelagem, animação e render 3D"
          key="title"
        />
      </Head>
      <Menu />
      <Section>
        <Carousel
          images={[PortfolioImages[19], PortfolioImages[11], PortfolioImages[8], PortfolioImages[2]]}
        />
      </Section>
      <About images={{1:PortfolioImages[3], 2:PortfolioImages[13]}}/>
      <Portfolio
        images={PortfolioImages}
      />
      <Contact />
      <Footer />
    </>
  );
}
