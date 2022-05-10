import { ContainerCategory } from "./styles";

interface IProps {
  label: string;
}

export default function MovieCategory({ label }: IProps) {
  return (
    <ContainerCategory>
      <span>{label}</span>
    </ContainerCategory>
  );
}
