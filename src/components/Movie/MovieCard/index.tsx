import { IMovie } from "../../../interfaces/IMovie";
import { Container } from "./styles";

interface IProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IProps) {
  console.log(movie);

  return <Container>swsw</Container>;
}
