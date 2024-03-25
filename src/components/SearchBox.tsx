"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="w-full flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md bg-transparent placeholder-gray-500 outline-none flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-500 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
