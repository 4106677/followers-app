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

button {
   &:hover {
  
     background: #ebd8ff;
    box-shadow: inset 0px 0px 5px rgba(0,0,0,0.5);
  }
   width: 196px;
  height: 50px;

  padding: 14px;
    background: #5cd3a8;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
}
`;
