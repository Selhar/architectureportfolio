import Head from "next/head";

import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PortfolioImages, imageoffset } from "../components/utils/constants";

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
          images={[PortfolioImages[19 + imageoffset], PortfolioImages[11 + imageoffset], PortfolioImages[8 + imageoffset], PortfolioImages[2 + imageoffset]]}
        />
      </Section>
      <About images={{1:PortfolioImages[3 + imageoffset], 2:PortfolioImages[13 + imageoffset]}}/>
      <Portfolio
        images={PortfolioImages}
      />
      <Contact />
      <Footer />
    </>
  );
}
