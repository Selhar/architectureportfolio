import React from 'react'
import styled from 'styled-components'

import { primary, secondary, yellow, grey } from '../../colors'
import Social from '../Social'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: white;
  font-size: 20px;
  border-bottom: 2px solid ${yellow};
  padding: 20px;
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`

const StyledLi = styled.li`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  :not(:first-of-type) {
    margin-left: 20px;
  }
`

const StyledA = styled.a`
  color: ${grey};
  &:hover {
    color: ${secondary}
  }
`

const StyledImg = styled.img`
  width: 250px;
  height: auto;
`

export default () => (
  <StyledDiv>
    <a href="/index">
      <StyledImg src="/static/logohorizontal.svg" alt="Logo da empresa" />
    </a>
    <StyledUl>
      <StyledLi>
        <StyledA href="/index">Home</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="#sobre">Sobre</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="#portfolio">Portfolio</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/contact">Orçamento</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/contact">Contato</StyledA>
      </StyledLi>
    </StyledUl>
    <Social fill={grey} width="auto" height="20px" />
  </StyledDiv>
)