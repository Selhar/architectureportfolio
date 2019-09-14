import React from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import About from '../components/about'
import Reset from '../styleguide/reset'
import Projects from "../components/projects"
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
      CONTATO PLACEHOLDER
    </StyledSection>
    <StyledSection>
      info footer social media
    </StyledSection>
  </div>
)

export default Home
