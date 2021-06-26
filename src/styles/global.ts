import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: #f8f8f8;
    color: #29292e
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;