import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
  }

  button{
    cursor:pointer;
  }

  a{
    text-decoration:none;
    color:inherit;
  }
`;
