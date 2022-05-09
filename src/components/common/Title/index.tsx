import * as S from "./styles";

interface IProps {
  children: string;
  hierarchy?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
}

export default function Title({ children, hierarchy = "h1", color }: IProps) {
  return (
    <>
      {hierarchy === "h1" && <S.H1Styled color={color}>{children}</S.H1Styled>}
      {hierarchy === "h2" && <S.H2Styled color={color}>{children}</S.H2Styled>}
      {hierarchy === "h3" && <S.H3Styled color={color}>{children}</S.H3Styled>}
      {hierarchy === "h4" && <S.H4Styled color={color}>{children}</S.H4Styled>}
      {hierarchy === "h5" && <S.H5Styled color={color}>{children}</S.H5Styled>}
      {hierarchy === "h6" && <S.H6Styled color={color}>{children}</S.H6Styled>}
    </>
  );
}
