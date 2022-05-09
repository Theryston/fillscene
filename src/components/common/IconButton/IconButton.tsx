import * as S from "./styles";
import { IconName } from "../Icon/icons";
import Icon from "../Icon";

interface IProps {
  iconName: IconName;
}

export default function IconButton({ iconName }: IProps) {
  return (
    <S.IconButton>
      <Icon name={iconName} />
    </S.IconButton>
  );
}
