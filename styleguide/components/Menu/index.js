import React from 'react'
import styled from 'styled-components'

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
  height: 100px;
  font-size: 20px;
  border-bottom: 1px solid black;
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 100px;
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

const StyledImg = styled.img`
  width: 45px;
  height: auto;
`

export default () => (
  <StyledDiv>
    <StyledImg src="/static/logo.svg" />
    <StyledUl>
      <StyledLi>
        <a href="#portfolio">Portfolio</a>
      </StyledLi>
      <StyledLi>
        Menu2
      </StyledLi>
      <StyledLi>
        Menu3
      </StyledLi>
      <StyledLi>
        Menu4
      </StyledLi>
    </StyledUl>
    <Social />
  </StyledDiv>
)