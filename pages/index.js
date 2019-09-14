import React from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import About from '../components/about'
import Reset from '../styleguide/reset'
import Projects from "../components/projects"
import Contact from "../components/contact"
import Social from "../components/social"

const StyledSection = styled.section`
`

const Home = () => (
  <div>
    <Reset />
    <Nav/>
    <StyledSection id="sobre">
      <About/>
    </StyledSection>
    <StyledSection id="projetos">
      <Projects/>
    </StyledSection>
    <StyledSection id="contato">
      <Contact/>
    </StyledSection>
    <StyledSection>
      <Social/>
    </StyledSection>
  </div>
)

export default Home
