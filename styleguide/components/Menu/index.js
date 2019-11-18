import React from "react";
import styled from "styled-components";

import { secondary, yellow, grey } from "../../colors";
import Social from "../Social";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 1200px) {
  }
  justify-content: space-around;
  align-items: center;
  background-color: white;
  font-size: 20px;
  border-bottom: 2px solid ${yellow};
  padding: 20px;

  @media (min-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: left;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledLi = styled.li`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 20px;
  margin-top: 5px;
`;

const StyledA = styled.a`
  color: ${grey};
  &:hover {
    color: ${secondary};
  }
`;

const StyledImg = styled.img`
  width: ${props => props.width || "250px"};
  height: auto;
`;

const HideSmall = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const HideLarge = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

export default () => (
  <StyledDiv>
    <a href="/index">
      <HideSmall>
        <StyledImg src="/static/logohorizontal.svg" alt="Logo da empresa" />
      </HideSmall>
      <HideLarge>
        <StyledImg src="/static/logo.svg" alt="Logo da empresa" width="50px" />
      </HideLarge>
    </a>
    <StyledUl>
      <StyledLi>
        <StyledA href="/index">Home</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/index#sobre">Sobre</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/index#portfolio">Portfolio</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/orcamento">Orçamento</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="/contato">Contato</StyledA>
      </StyledLi>
    </StyledUl>
    <Social fill={grey} width="auto" height="20px" />
  </StyledDiv>
);
