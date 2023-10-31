import React, { useState } from "react";
import { Search, DefaultCarousel, StarRating, Recipecard } from "./index";
import { handleUpdateRating } from "../lib";
export default function Home() {
  //state to keep track of what user searches for
  const [search, setSearch] = useState("");

  return (
    <section className="px-2 flex-1">
      {/* container for search bar */}
      <Search
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      {/* section for carousel */}
      <section id="carousel" className="relative">
        <div className="absolute top-20 left-16 z-10 py-5 bg-slate-300 bg-opacity-[65%] px-2 rounded-md xsm:hidden md:block max-w-[75%]">
          <h1 className="bg-blend-screen text-3xl lg:text-4xl font-bold text-green-500">
            Trending Now
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--sidebar-primary)]">
            Kelvin&apos;s Famous Salad With Cheese
          </h2>
          <p className="text-xl lg:text-2xl ">By Kelvin Kimaru</p>
          <StarRating percentage={5 / 5} onClick={handleUpdateRating} />
        </div>
        <DefaultCarousel />
      </section>
      {/* section for recipe cards */}
      <section className="py-2 px-2">
        <h2 className="text-center text-2xl font-bold text-gray-600">
          Recommended For You
        </h2>
        <Recipecard />
      </section>
    </section>
  );
}
