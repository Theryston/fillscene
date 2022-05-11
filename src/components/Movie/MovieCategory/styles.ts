import styled, { css } from "styled-components";
import HexToRgba from "../../../utils/style/HexToRgba";

export const ContainerCategory = styled.div`
  ${({ theme }) => css`
    span {
      background: ${HexToRgba(theme.colors.backgroundPrimary, 0.5)};
      border-radius: 0px 8px;
      flex: none;
      padding: 4px 8px;

      font-size: ${theme.font.paragraph.small.fontSize};
      color: ${theme.colors.tertiaryColor};
    }
  `}
`;
