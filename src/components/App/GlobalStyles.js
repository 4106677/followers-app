import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
 
*,
*::before,
*::after {
  box-sizing: inherit;
}

 body {
  margin: 0;

    padding: 0;
    font-family:  'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
   background-color: rgb(231 236 242);
      color: rgb(1,67,97);
}


ul {
  list-style: none;
   margin: 0;
    padding: 0;
}

li {
    list-style: none;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
