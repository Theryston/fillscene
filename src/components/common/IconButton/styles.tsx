import styled, { css } from "styled-components";
import LightenDarkenColor from "../../../utils/style/LightenDarkenColor";

export const IconButton = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${LightenDarkenColor(
        theme.colors.backgroundPrimary,
        15
      )};

      transform: scale(1.05);
    }
  `}
`;
