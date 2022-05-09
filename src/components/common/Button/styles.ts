import styled, { css } from "styled-components";
import LightenDarkenColor from "../../../utils/style/LightenDarkenColor";

export const ButtonStyled = styled.button<{
  variant:
    | "primary"
    | "secondary--border-primary"
    | "secondary--border-neutral";
}>`
  ${({ theme, variant }) => css`
    padding: 16px 125px;
    background: ${variant === "primary"
      ? theme.colors.primaryColor
      : theme.colors.backgroundPrimary};
    border-radius: 40px;
    border: none;
    outline: none;
    color: ${theme.colors.neutralColor};

    font-size: ${theme.font.paragraph.medium.fontSize};

    transition: all 0.3s ease-in-out;

    ${variant === "secondary--border-primary" &&
    `
      border: 1px solid ${theme.colors.primaryColor};
    `}

    ${variant === "secondary--border-neutral" &&
    `
      border: 1px solid ${theme.colors.neutralColor};
    `}

    &:hover {
      box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
      background-color: ${LightenDarkenColor(
        variant === "primary"
          ? theme.colors.primaryColor
          : theme.colors.neutralColor,
        variant === "primary" ? -15 : -220
      )};
    }

    /* linear-gradient(
      ${`${theme.colors.gradient.deg}deg, ${theme.colors.gradient.orientations.beginning.color} ${theme.colors.gradient.orientations.beginning.percent}, ${theme.colors.gradient.orientations.middle.color} ${theme.colors.gradient.orientations.middle.percent}, ${theme.colors.gradient.orientations.end.color} ${theme.colors.gradient.orientations.end.percent}`}
    ) */
  `}
`;
