import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* TEMPORARY */
  width: 1200px;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  max-width: 500px;
`

const StyledH1 = styled.h1`
  text-align: left;
`

const Box = styled.div`
  background-color: red;
  width: 500px;
  height: 400px;
`

export default () => (
  <React.Fragment>
    <Wrapper>
      <TextWrapper>
        <StyledH1>O estúdio</StyledH1>
        <p>dpasokdpaso asodk aspdok aspdok aspdok asdpasokdpaso asodk aspdok aspdok aspdok asdpasokdpaso asodk aspdok aspdok aspdok asdpasokdpaso asodk aspdok aspdok aspdok as</p>
      </TextWrapper>
      <Box />
    </Wrapper>
  </React.Fragment>
)