import React from "react";

type Props = {
  movies: {
    id: string;
    original_title: string;
  }[];
};

const Movies = ({ movies }: Props) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
};

export default Movies;
