import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex gap-4 p-4 bg-amber-100 dark:bg-gray-600 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
