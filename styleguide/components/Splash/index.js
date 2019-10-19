import React from 'react'
import styled from 'styled-components'

import {email, mensagemSplash} from '../../data'

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
`

const CenterMessage = styled.div`
  position: absolute;
  top: ${props => props.center ? '50%' : '99%'};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 20px;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  max-width: 400px;
`

export default () => (
  <StyledDiv>
    <StyledImg src='/static/portfolio/Fachada Residencial/15 grande.jpg' />
    <CenterMessage center>{mensagemSplash}</CenterMessage>
    <CenterMessage>{email}</CenterMessage>
  </StyledDiv>
)