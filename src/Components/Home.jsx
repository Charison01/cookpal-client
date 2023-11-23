import React, { useState, useEffect } from "react";
import { Recipecard } from "./index";
export default function Home() {
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("https://cookpal.up.railway.app/featured");
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
          setLoading(false);
        }
      })();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);
  return (
    <section className="px-2 w-full overflow-hidden flex-1 lg:max-w-[75%] lg:mx-auto">
      {/* section for carousel */}
      <section className=" mb-2 bg-[url('/public/hero-bg.png')] bg-cover bg-center h-[600px] rounded-lg">
        <div className="flex h-full ">
          <div className="m-auto inset-0 text-center">
            <h1 className="font-extrabold text-4xl lg:text-7xl pb-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Anyone Can Be A{" "}
              <span className="text-4xl lg:text-6xl font-serif italic">
                Chef.
              </span>
            </h1>
            <p className="py-2 leading-loose text-2xl text-center text-slate-100 font-bold glow">
              Discover the secret of good cooking
              <br className="hidden md:block" />
              and learn all types of recipes with Cookpal!
            </p>
            <a href="/recipes">
              <button className="btn bg-[--sidebar-primary] text-white border-none my-2 hover:bg-green-500">
                Explore Recipes
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* section for recipe cards */}
      <div className="py-2 px-2  text-gray-600">
        <h2 className="text-2xl lg:text-3xl font-bold">Featured Recipes</h2>
        <p>Made by popular chefs</p>
        {loading && (
          <progress className="progress progress-primary w-full"></progress>
        )}
      </div>

      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {recipes?.featured?.length > 0 &&
          recipes?.featured?.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))}
      </section>
      {/* trending recipes cards */}
      <div className="py-2 px-2  text-gray-600">
        <h2 className="text-2xl lg:text-3xl font-bold">Trending Recipes</h2>
        <p>Most rated by the community</p>
      </div>

      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {recipes?.trending?.length > 0 &&
          recipes?.trending?.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))}
      </section>
    </section>
  );
}
