import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

type Props = {
  movie: {
    id: string;
    backdrop_path?: string;
    poster_path?: string;
    overview: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
  };
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="group cursor-pointer rounded-lg sm:border sm:border-slate-400 sm:shadow-md sm:hover:shadow-slate-400 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="movie"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-55 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 font-medium">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="mr-1 ml-3" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
