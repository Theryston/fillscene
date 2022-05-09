import * as S from "./styles";

interface IProps {
  children: string;
  size?: "big" | "medium" | "small";
  color?: string;
}

export default function Paragraph({
  children,
  color,
  size = "medium",
}: IProps) {
  return (
    <S.StyledParagraph size={size} color={color}>
      {children}
    </S.StyledParagraph>
  );
}
