import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  font-size: 20px;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  :not(:first-of-type) {
    margin-left: 20px;
  }
`

export default () => (
  <StyledDiv>
    <img src="https://via.placeholder.com/75x75" />
    <StyledUl>
      <StyledLi>
        oi
      </StyledLi>
      <StyledLi>
        oi2
      </StyledLi>
    </StyledUl>
    <img src="https://via.placeholder.com/15x15" />
  </StyledDiv>
)