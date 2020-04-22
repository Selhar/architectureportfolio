import React from "react";
import Header from "../styleguide/components/Header"
import Video from "../styleguide/components/Video"
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
    <Video videosrc="https://static.videezy.com/system/resources/previews/000/041/079/original/029_07.mp4" />
    <Section id="about" classes="bg-white">
      <About />
    </Section>
    <Section id="portfolio" classes="bg-white">
      <Portfolio />
    </Section>
    <Section id="orcamento" classes="bg-white">
      <Orcamento perfis={perfis} projectType={projectType} white />
    </Section>
    <Section id="contact" classes="bg-white">
      <Contact />
    </Section>
  </div>
);

export default Home;
