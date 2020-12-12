import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    --white: #FFF;
    --grey1: #4F4F4F;
    --grey2: #828282;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;