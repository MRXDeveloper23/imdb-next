import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

type Props = {
  params: {
    id: number;
  };
};

const MoviePage = async ({ params }: Props) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row gap-4 content-center max-w-6xl mx-auto">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="movie"
        width={500}
        height={300}
        className="rounded-lg"
      />
      <div className="p-2">
        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
        <p className="text-lg mb-3">{movie.overview}</p>
        <p className="flex items-center">
          <span className="font-semibold mr-1">Release Date:</span>
          {movie.release_date || movie.first_air_date}
          <FiThumbsUp className="mr-1 ml-3" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default MoviePage;
