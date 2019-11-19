import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styleguide/reset";

import Menu from "../styleguide/components/Menu";
import Splash from "../styleguide/components/Splash";
import About from "../styleguide/components/About";
import Projects from "../styleguide/components/Projects";
import Footer from "../styleguide/components/Footer";

import "../style.css";
const StyledSplash = styled(Splash)`
  z-index: -1;
  border: 5px solid blue;
  margin-bottom: 50px;
`;

const StyledSection = styled.section`
  background-color: ${props => props.color};
  width: 100%;
  height: ${props => props.height || ""};
  &:not(:first-of-type) {
    padding: 30px 0 0 0;
    @media (min-width: 1200px) {
      padding: 110px 0 0 0;
    }
  }

  & > * {
    max-width: 1600px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    margin-top: ${props => (props.menuSpacing ? "100px" : "")};
  }
`;

const Home = () => (
  <React.Fragment>
    <GlobalStyle />
    <Menu />
    <StyledSection id="splash" color="white" menuSpacing>
      <StyledSplash />
    </StyledSection>
    <h1 className="text-purple-500 leading-normal">gudamzinho</h1>
    <StyledSection id="sobre" color="white">
      <About />
    </StyledSection>
    <StyledSection id="portfolio" color="white">
      <Projects />
    </StyledSection>
    <StyledSection id="footer" color="white">
      <Footer />
    </StyledSection>
  </React.Fragment>
);

export default Home;
