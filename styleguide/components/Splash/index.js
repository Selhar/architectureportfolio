import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  max-width: 1600px;
  max-height: 720px;
  width: 100%;
  height: 100%;
`

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
`

const CenterMessage = styled.div`
  position: absolute;
  top: ${props => props.center ? '50%' : '98%'};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 20px;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
`

export default () => (
  <StyledDiv>
    <StyledImg src='https://static.wixstatic.com/media/66c4d0_73cc8267a0e843c2b26ef2e854794930~mv2.png/v1/fill/w_1501,h_708,al_c,q_90,usm_0.66_1.00_0.01/66c4d0_73cc8267a0e843c2b26ef2e854794930~mv2.webp' />
    <CenterMessage center>Mensagem</CenterMessage>
    <CenterMessage>Mensagem</CenterMessage>
  </StyledDiv>
)