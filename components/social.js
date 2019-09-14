import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 40px;
  height: auto;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

export default () => (
  <StyledDiv>
    <StyledImg src="/static/facebook-icon.png"/>
    <StyledImg src="/static/instagram-item.png"/>
    <StyledImg src="/static/mail-icon.png"/>
  </StyledDiv>
)

