import React from "react";
import Gallery from "react-grid-gallery";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  .ReactGridGallery_custom-overlay {
    transition: 0.3s;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 35px;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`;
const CenterMessage = styled.div`
  position: absolute;
  top: ${props => (props.center ? "50%" : "99%")};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  max-width: 400px;
`;

const GalleryWrapper = styled.div`
  display: block;
  min-height: 1px;
  width: 100%;
  overflow: auto;
`;

const Images = [
  {
    src: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnail: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/Interiores/14.jpg",
    thumbnail: "/static/portfolio/Interiores/14.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/Interiores/16.1.jpg",
    thumbnail: "/static/portfolio/Interiores/16.1.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/Interiores/20.jpg",
    thumbnail: "/static/portfolio/Interiores/20.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/Interiores/26.jpg",
    thumbnail: "/static/portfolio/Interiores/26.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/Interiores/7.jpg",
    thumbnail: "/static/portfolio/Interiores/7.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  },
  {
    src: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnailWidth: 620,
    thumbnailHeight: 312,
    customOverlay: (
      <Overlay className="mainOverlay">
        <CenterMessage center>Mensagem</CenterMessage>
      </Overlay>
    )
  }
];

export default () => (
  <StyledDiv>
    <StyledH1>Projetos</StyledH1>
    <GalleryWrapper>
      <Gallery
        images={Images}
        rowHeight={250}
        enableImageSelection={false}
        style={"max-width: 100vw"}
        lightboxWidth={5000}
        backdropClosesModal
        showLightboxThumbnails
        imageCountSeparator={" de "}
        maxRows={3}
      />
    </GalleryWrapper>
  </StyledDiv>
);
