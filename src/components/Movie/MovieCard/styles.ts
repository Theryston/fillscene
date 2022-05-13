import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow-y: hidden;
  width: 292px;
  height: 440px;
  position: relative;

  :hover {
    img {
      transform: scale(1.05);
    }
    .link-watch-movie {
      bottom: 24px;
    }
    .content-container {
      padding-bottom: 40px;
    }
  }
`;

export const PosterImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 24px;
  transition: all 0.2s ease-in-out;

  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 0%,
    rgba(29, 29, 29, 0.8) 80.79%
  );
`;

export const ContainerCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const MovieTitle = styled.p`
  ${({ theme }) => css`
    margin: 16px 0px;
    font-size: ${theme.font.titles.h5.fontSize};
    font-weight: ${theme.font.titles.h5.fontWeight};
  `}
`;

export const LinkWatchMovie = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: -100px;
    transition: all 0.2s ease-in-out;
    font-size: ${theme.font.paragraph.small.fontSize};
  `}
`;
