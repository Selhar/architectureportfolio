import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body{
    max-width: 1600px;
    margin: 0 auto;
    background-color: #fff317;
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