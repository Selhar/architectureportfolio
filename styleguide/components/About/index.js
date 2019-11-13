import React from "react";
import styled from "styled-components";

import { mensagemEstudio } from "../../data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    max-width: 500px;
    margin-right: 70px;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const StyledImage = styled.img`
  display: none;
  @media (min-width: 1200px) {
    height: 600px;
    width: auto;
  }
`;

const StyledParagraph = styled.p`
  @media (min-width: 1200px) {
    max-width: 400px;
  }
  padding: 20px;
  margin-top: 25px;
  text-align: justify;
`;

export default () => (
  <React.Fragment>
    <Wrapper>
      <TextWrapper>
        <StyledH1>O estúdio</StyledH1>
        <StyledParagraph>{mensagemEstudio}</StyledParagraph>
      </TextWrapper>
      <StyledImage src="/static/portfolio/Interiores/20.jpg" />
    </Wrapper>
  </React.Fragment>
);
