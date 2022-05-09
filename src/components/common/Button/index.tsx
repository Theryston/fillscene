import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary--border-primary"
    | "secondary--border-neutral";
}

export default function Button({
  children,
  variant = "primary",
  ...rest
}: IProps) {
  return (
    <S.ButtonStyled variant={variant} {...rest}>
      {children}
    </S.ButtonStyled>
  );
}
