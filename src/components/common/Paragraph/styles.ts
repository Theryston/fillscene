import styled, { css } from "styled-components";

export const StyledParagraph = styled.p<{
  size: "big" | "medium" | "small";
  color?: string;
}>`
  ${({ theme, color, size }) => css`
    font-size: ${theme.font.paragraph[size].fontSize};
    font-height: ${theme.font.paragraph[size].fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;
