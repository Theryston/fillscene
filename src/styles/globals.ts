import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.backgroundPrimary};
      color: ${theme.colors.neutralColor};
      font-family: ${theme.font.family};
    `}
  }

  a {
    ${({ theme }) => css`
      color: ${theme.colors.neutralColor};
      text-decoration: none;

      :hover {
        color: ${theme.colors.neutralColor};
      }
    `}
  }
`;
