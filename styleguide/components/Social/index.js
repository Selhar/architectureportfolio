import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledImg = styled.img`
  width: 30px;
  height: auto;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`

export default () => (
  <StyledDiv>
    <StyledImg src='/static/whatsapp-logo-variant.svg' />
    <StyledImg src='/static/instagram.svg' />
  </StyledDiv>
)

