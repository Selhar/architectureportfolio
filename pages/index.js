import React from "react";
import Header from "../styleguide/components/Header"
import Carousel from "../styleguide/components/Carousel"
import About from "../styleguide/components/About"
import Section from "../styleguide/components/Section"
import Portfolio from "../styleguide/components/Portfolio"
import Orcamento from "../styleguide/components/Orcamento"
import Contact from "../styleguide/components/Contact"

import "../style.css";
import {perfis, projectType} from "../styleguide/data"

const Home = () => (
  <div className="relative">
    <Header classes="p-4"/>
    <Carousel images={[
      "/static/portfolio/Fachada Residencial/final noite 3.jpg", 
      "/static/portfolio/Interiores/7.jpg", 
      "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg"
      ]} />
    <Section id="about" classes="bg-yellow">
      <About />
    </Section>
    <Section id="portfolio" classes="bg-orange">
      <Portfolio />
    </Section>
    <Section id="orcamento" classes="bg-yellow">
      <Orcamento perfis={perfis} projectType={projectType}/>
    </Section>
    <Section id="contact" classes="bg-orange">
      <Contact />
    </Section>
  </div>
);

export default Home;
