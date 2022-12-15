/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
    transition: border 0.15s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  @media(max-width: ${(props) => props.theme.md}) {
    html {
      font-size: 87.5%;
    }
  }
`;
