import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.mainFont};
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.basic.lightColor};
  }
  
  p,
  span,
  h1,
  h2,
  h3 {
    margin: 0;
  }

  button {
    border: none;
    font: inherit;
    background-color: inherit;
  }

  input {
    all: unset;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
