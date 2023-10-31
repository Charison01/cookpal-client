//route to show all recipes
import { Search, Recipecard } from "../Components";
import React from "react";

export default function Explore({ search, setSearch, recipes }) {
  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      {/* section for search bar */}
      <Search search={search} onSearchChange={setSearch} />
      {/* section for all recipes */}
      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))}
      </section>
    </section>
  );
}
