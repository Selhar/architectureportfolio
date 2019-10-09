import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../styleguide/reset'

import Menu from '../styleguide/components/Menu'
import Splash from '../styleguide/components/Splash'

const StyledSplash = styled(Splash)`
  z-index: -1;
  border: 5px solid blue;

`
const Home = () => (
  <React.Fragment>
    <GlobalStyle />
    <Menu />
    <StyledSplash />
  </React.Fragment>
)

export default Home
