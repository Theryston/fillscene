export interface IMovie {
  _id: string;
  title: string;
  posters: IMoviePoster[];
  genres: IMovieGenre[];
}

export interface IMoviePoster {
  aspect_ratio: number;
  height: number;
  width: number;
  iso_639_1: string;
  file_path: string;
  base_url: string;
  vote_average: number;
  vote_count: number;
  sizes: IMoviePosterSize[];
}

export interface IMoviePosterSize {
  width: number;
  height: number;
  url: string;
  label: "original" | "w200" | "w300" | "w400" | "w500";
}

export interface IMovieGenre {
  _id: string;
  tmdb_id: number;
  name: string;
}
