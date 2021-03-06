import { createGlobalStyle } from 'styled-components';
import hop from '../assets/hop.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body{
    background: url(${hop}) center center fixed;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }

  body, button, input {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

   a {
     text-decoration: none;
   }

   ul {
     list-style: none;
   }
`;
