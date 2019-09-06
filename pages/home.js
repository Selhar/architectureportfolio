import React from 'react'
import styled from 'styled-components';

import Nav from '../components/nav'
import About from '../components/about'
import Reset from '../styleguide/reset'

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
`

const Home = () => (
  <div>
    <Reset />
    <Nav/>
    <StyledSection id="sobre">
      <About/>
    </StyledSection>
    <StyledSection id="projetos">
      <h1>Projetos</h1> 
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
