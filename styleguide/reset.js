import { createGlobalStyle } from 'styled-components'

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

  body{
    max-width: 1600px;
    margin: 0 auto;
    font-family: 'Sensation Regular', sans-serif;
    & * {
      margin: 0;
      border: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
`