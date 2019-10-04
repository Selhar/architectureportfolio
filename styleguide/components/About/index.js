import React from 'react'
import styled from 'styled-components'
import { transparentBackground, primary } from '../styleguide/colors'
const StyledImg = styled.img`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: auto;
  z-index: -1;
`

const StyledP = styled.p`
  position: absolute;
  top: 60%;  
  transform: translate(0, -50%); 
  color: ${primary};
  padding: 20px;
  background-color: ${transparentBackground};
  border-radius: 4px;
  max-width: 400px;
`

export default () => (
  <div>
    <StyledP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</StyledP>
    <StyledImg src="/static/splash.jpg"></StyledImg>
  </div>
)

