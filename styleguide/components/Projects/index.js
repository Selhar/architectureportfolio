import React from 'react'
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';

const Images = [
  {
    src: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnail: "/static/portfolio/Fachada Residencial/14 grande.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Interiores/14.jpg",
    thumbnail: "/static/portfolio/Interiores/14.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Interiores/16.1.jpg",
    thumbnail: "/static/portfolio/Interiores/16.1.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Interiores/20.jpg",
    thumbnail: "/static/portfolio/Interiores/20.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Interiores/26.jpg",
    thumbnail: "/static/portfolio/Interiores/26.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Interiores/7.jpg",
    thumbnail: "/static/portfolio/Interiores/7.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/lavanderia08.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/lavandacoletiva/LAVANDERIA11.jpg",
    thumbnail: "/static/portfolio/lavandacoletiva/LAVANDERIA11.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
  {
    src: "/static/portfolio/Playground - Piscina/PISCINA - Àrea Gourmet.jpg",
    thumbnail: "/static/portfolio/Playground - Piscina/PISCINA - Àrea Gourmet.jpg",
    thumbnailWidth: 700,
    thumbnailHeight: 700,
  },
]

const StyledDiv = styled.div`
  width: 900px;
`

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 35px;
`

export default () => (
  <StyledDiv id='portfolio'>
    <StyledH1>Projetos</StyledH1>
    <Gallery images={Images} enableImageSelection={false}/>
  </StyledDiv>
)

