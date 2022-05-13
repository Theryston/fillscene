import Link from "next/link";
import { IMovie } from "../../../interfaces/IMovie";
import MovieCategory from "../MovieCategory";
import {
  Container,
  ContainerCategories,
  ContentContainer,
  LinkWatchMovie,
  MovieTitle,
  PosterImage,
} from "./styles";

interface IProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IProps) {
  console.log(movie);

  return (
    <Container>
      <PosterImage
        src={movie.posters[0].sizes.find((s) => s.label === "w500")?.url || ""}
        alt={movie.title}
        width={292}
        height={440}
        objectFit="cover"
      />
      <ContentContainer className="content-container">
        <ContainerCategories>
          {movie.genres.map((genre) => (
            <MovieCategory key={genre._id} label={genre.name} />
          ))}
          <MovieTitle>{movie.title}</MovieTitle>
          <LinkWatchMovie className="link-watch-movie">
            <Link href={`/watch/movie/${movie._id}`}>
              <a>Watch now</a>
            </Link>
          </LinkWatchMovie>
        </ContainerCategories>
      </ContentContainer>
    </Container>
  );
}
