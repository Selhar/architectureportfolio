import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { secondary, grey } from "../../colors";

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const CenterMessage = styled.div`
  position: absolute;
  top: ${props => (props.center ? "50%" : "99%")};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 20px;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  max-width: 400px;
`;

const SliderContainer = styled.div`
  max-width: 100vw;
  margin: auto;
  position: relative;
`;

const StyledButtonBack = styled(ButtonBack)`
  color: ${grey};
  background-color: white;
  border-radius: 50px;
  padding: 0 10px;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const StyledButtonNext = styled(ButtonNext)`
  color: ${grey};
  background-color: white;
  border-radius: 50px;
  padding: 0 10px;
  font-size: 2em;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const StyledDotGroup = styled(DotGroup)`
  text-align: center;
  .carousel__dot {
    background-color: ${grey};
    font-size: 2em;
    padding: 10px;
    margin: 10px;
    border-radius: 50px;
  }
  .carousel__dot--selected {
    background-color: ${secondary};
  }
`;

export default () => (
  <StyledDiv>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      hasMasterSpinner
      isPlaying
      interval={5000}
    >
      <SliderContainer>
        <Slider>
          <Slide index={0}>
            <Image
              src="/static/portfolio/Fachada Residencial/14 grande.jpg"
              hasMasterSpinner
            />
            <CenterMessage center>Mensagem 1</CenterMessage>
          </Slide>
          <Slide index={1}>
            <Image
              src="/static/portfolio/Fachada Residencial/14 grande.jpg"
              hasMasterSpinner
            />
            <CenterMessage center>Mensagem 2</CenterMessage>
          </Slide>
          <Slide index={2}>
            <Image
              src="/static/portfolio/Fachada Residencial/14 grande.jpg"
              hasMasterSpinner
            />
            <CenterMessage center>Mensagem 3</CenterMessage>
          </Slide>
        </Slider>
      </SliderContainer>
      <StyledButtonBack>{"<"}</StyledButtonBack>
      <StyledButtonNext>{">"}</StyledButtonNext>
      <StyledDotGroup showAsSelectedForCurrentSlideOnly />
    </CarouselProvider>
  </StyledDiv>
);
