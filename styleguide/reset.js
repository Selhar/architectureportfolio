import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'Geogrotesque';
      src: url('/static/fonts/Geogtq-Md.otf');
  }

  @font-face {
      font-family: 'Sensation Regular';
      src: url('/static/fonts/sansation_regular.ttf');
  }

  @font-face {
      font-family: 'Sensation Bold';
      src: url('/static/fonts/sansation_bold.ttf');
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body{
    margin: 0 auto;
    font-family: 'Geogrotesque', sans-serif;
    max-width: 100vw;
    & * {
      margin: 0;
      border: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      outline: none;
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
`;
