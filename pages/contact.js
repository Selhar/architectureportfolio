import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styleguide/reset'

import Contact from '../styleguide/components/Contact'
import ProfessionalContact from '../styleguide/components/ProfessionalContact'
import Menu from '../styleguide/components/Menu'

const StyledSection = styled.section`
  background-color: ${props => props.color};
  width: 100%;
  height: ${props => props.height || ''};
  padding: 200px 0 50px 0;

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
        <Contact />
      </StyledSection>
      <StyledSection color='white'>
        <ProfessionalContact />
      </StyledSection>
  </React.Fragment>
)

export default Home
