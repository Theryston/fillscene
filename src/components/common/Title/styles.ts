import styled, { css } from "styled-components";

interface IHProps {
  color?: string;
}

export const H1Styled = styled.h1<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h1.fontSize};
    font-weight: ${theme.font.titles.h1.fontWeight};
    font-height: ${theme.font.titles.h1.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;

export const H2Styled = styled.h2<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h2.fontSize};
    font-weight: ${theme.font.titles.h2.fontWeight};
    font-height: ${theme.font.titles.h2.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;

export const H3Styled = styled.h3<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h3.fontSize};
    font-weight: ${theme.font.titles.h3.fontWeight};
    font-height: ${theme.font.titles.h3.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;

export const H4Styled = styled.h4<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h4.fontSize};
    font-weight: ${theme.font.titles.h4.fontWeight};
    font-height: ${theme.font.titles.h4.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;

export const H5Styled = styled.h5<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h5.fontSize};
    font-weight: ${theme.font.titles.h5.fontWeight};
    font-height: ${theme.font.titles.h5.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;

export const H6Styled = styled.h6<IHProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.titles.h6.fontSize};
    font-weight: ${theme.font.titles.h6.fontWeight};
    font-height: ${theme.font.titles.h6.fontHeight};
    color: ${color ? color : theme.colors.neutralColor};
    margin: 0;
    padding: 0;
  `}
`;
