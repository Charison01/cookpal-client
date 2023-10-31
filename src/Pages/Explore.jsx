//route to show all recipes
import { Search, Recipecard } from "../Components";
import React from "react";

export default function Explore({search, setSearch, recipes}) {
  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
        {/* section for search bar */}
        <Search search={search} onSearchChange={setSearch}/>
        {/* section for all recipes */}
    </section>
  );
}
