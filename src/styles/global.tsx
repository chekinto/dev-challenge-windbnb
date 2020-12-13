import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    --grey1:#F2F2F2;
    --grey2: #828282;
    --grey3: #4F4F4F;
    --red: #EB5757;
    --white: #FFF;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;