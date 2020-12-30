import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    --grey4: #BDBDBD;
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