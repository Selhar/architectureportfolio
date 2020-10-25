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
          images={[PortfolioImages[1], PortfolioImages[2], PortfolioImages[7], PortfolioImages[14]]}
        />
      </Section>
      <About images={{1:PortfolioImages[8], 2:PortfolioImages[5]}}/>
      <Portfolio
        images={[PortfolioImages[1], PortfolioImages[2], PortfolioImages[3],
          PortfolioImages[4], PortfolioImages[5], PortfolioImages[6],
          PortfolioImages[7], PortfolioImages[8], PortfolioImages[9],
          PortfolioImages[10], PortfolioImages[11], PortfolioImages[12],
          PortfolioImages[13], PortfolioImages[14], PortfolioImages[15],
          PortfolioImages[16], PortfolioImages[17], PortfolioImages[18],
        PortfolioImages[19]]}
      />
      <Contact />
      <Footer />
    </>
  );
}
