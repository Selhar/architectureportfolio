import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 30px;
  height: auto;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

export default () => (
  <StyledDiv>
    <StyledImg src="https://via.placeholder.com/30x30"/>
    <StyledImg src="https://via.placeholder.com/30x30"/>
    <StyledImg src="https://via.placeholder.com/30x30"/>
  </StyledDiv>
)

