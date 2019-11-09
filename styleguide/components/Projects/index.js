import React from "react";
import Gallery from "react-grid-gallery";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 1200px;
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 35px;
`;

const CenterMessage = styled.div`
  position: absolute;
  top: ${props => (props.center ? "50%" : "99%")};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  max-width: 400px;
`;

const Images = [
  {
    src: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnail: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Interiores/14.jpg",
    thumbnail: "/static/portfolio/Interiores/14.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Interiores/16.1.jpg",
    thumbnail: "/static/portfolio/Interiores/16.1.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Interiores/20.jpg",
    thumbnail: "/static/portfolio/Interiores/20.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Interiores/26.jpg",
    thumbnail: "/static/portfolio/Interiores/26.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Interiores/7.jpg",
    thumbnail: "/static/portfolio/Interiores/7.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/lavandacoletiva/LAVANDERIA11.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/LAVANDERIA11.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  },
  {
    src: "/static/portfolio/Playground - Piscina/PISCINA - Àrea Gourmet.jpg",
    thumbnail:
      "/static/portfolio/Playground - Piscina/PISCINA - Àrea Gourmet.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: <CenterMessage center>Mensagem</CenterMessage>
  }
];

export default () => (
  <StyledDiv id="portfolio">
    <StyledH1>Projetos</StyledH1>
    <Gallery
      images={Images}
      rowHeight={250}
      enableImageSelection={false}
      customOverlay={<div>tomanocumen</div>}
    />
  </StyledDiv>
);
