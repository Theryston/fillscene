import { IMovie } from "../../../interfaces/IMovie";
import { ContainerFeatured } from "./styles";

interface IProps {
  movie: IMovie;
}

export default function MovieFeatured({ movie }: IProps) {
  return (
    <ContainerFeatured>
      <span>{movie.title}</span>
    </ContainerFeatured>
  );
}
