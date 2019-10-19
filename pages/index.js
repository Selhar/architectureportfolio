import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styleguide/reset'

import Menu from '../styleguide/components/Menu'
import Splash from '../styleguide/components/Splash'
import About from '../styleguide/components/About'
import Projects from '../styleguide/components/Projects'

const StyledSplash = styled(Splash)`
  z-index: -1;
  border: 5px solid blue;
  margin-bottom: 50px;
`

const StyledSection = styled.section`
  background-color: ${props => props.color};
  width: 100%;
  height: ${props => props.height || ''};
  &:not(:first-of-type){
    padding: 100px 0 50px 0;
  }

  & > * {
    max-width: 1600px;
    margin: 0 auto;
  }
`

const Home = () => (
  <React.Fragment>
    <GlobalStyle />
      <Menu />
      <StyledSection color='white'>
        <StyledSplash />
      </StyledSection>
      <StyledSection color='white'>
        <About />
      </StyledSection>
      <StyledSection color='white' height='600px'>
        <Projects />
      </StyledSection>
  </React.Fragment>
)

export default Home
