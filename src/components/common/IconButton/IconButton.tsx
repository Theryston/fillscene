import React from "react";
import * as S from "./styles";

interface IProps {
  Icon: any;
}

export default function IconButton({ Icon }: IProps) {
  return (
    <S.IconButton>
      <Icon color="#ffffff" size="25px" />
    </S.IconButton>
  );
}
