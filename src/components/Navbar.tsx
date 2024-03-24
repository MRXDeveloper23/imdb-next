import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className=" bg-amber-100 dark:bg-gray-600 lg:text-lg">
      <div className="flex gap-4 max-w-6xl mx-auto p-3">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top rated" param="fetchTopRated" />
      </div>
    </div>
  );
};

export default Navbar;
