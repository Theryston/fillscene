import Image from "next/image";
import styled, { css } from "styled-components";
import HexToRgba from "../../../utils/style/HexToRgba";

export const ContainerMenu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 56px;
    z-index: 999999;

    background: ${HexToRgba(theme.colors.backgroundPrimary, 0.5)};

    box-shadow: 0px 40px 40px 8px
      ${HexToRgba(theme.colors.backgroundPrimary, 0.5)};
    backdrop-filter: blur(24px);

    padding-top: 40px;
  `}
`;

export const LogoImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const ContainerItems = styled.div`
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;

export const ItemMenu = styled.div``;
