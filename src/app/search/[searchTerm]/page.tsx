import Movies from "@/components/Movies";
import React from "react";

type Props = {
  params: {
    searchTerm: string;
  };
};

const SearchPage = async ({ params }: Props) => {
  const searchTerm = params?.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`
  );

  const data = await res.json();
  const movies = data?.results;
  return (
    <div>
      {movies && movies?.length === 0 ? (
        <h2 className="text-center pt-6">No results found!</h2>
      ) : null}
      {movies?.length > 0 ? <Movies movies={movies} /> : null}
    </div>
  );
};

export default SearchPage;
