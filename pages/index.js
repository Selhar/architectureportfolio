import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styleguide/reset'

import Menu from '../styleguide/components/Menu'
import Splash from '../styleguide/components/Splash'
import About from '../styleguide/components/About'
import Projects from '../styleguide/components/Projects'
import Contact from '../styleguide/components/Contact'
import ProfessionalContact from '../styleguide/components/ProfessionalContact'

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`

const Spacing = styled.div`
  margin-bottom: 100px;
`

const StyledSplash = styled(Splash)`
  z-index: -1;
  border: 5px solid blue;
  margin-bottom: 50px;
`

const Home = () => (
  <React.Fragment>
    <GlobalStyle />
    <Wrapper>
      <Menu />
      <StyledSplash />
      <Spacing />
      <About />
      <Spacing />
      <Contact />
      <Spacing />
      <Projects />
      <Spacing />
      <ProfessionalContact />
    </Wrapper>
  </React.Fragment>
)

export default Home
