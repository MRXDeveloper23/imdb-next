import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  movies: {
    id: string;
    backdrop_path?: string;
    poster_path?: string;
    overview: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
  }[];
};

const Movies = ({ movies }: Props) => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto p-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
