import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;700&display=swap');

html {
  box-sizing: border-box;
  font-size: 16px;
  /* width: 100vh; */
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: 'Inter';
  font-style: normal;

}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

 html {
   margin: 0px;
   height: 100%;
   max-width: 100%;
}

body {
   margin: 0px;
   min-height: 100%;
   max-width: 100%;
} 
`;

export default GlobalStyles;
