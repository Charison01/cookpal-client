import React, { useState, useEffect } from "react";
import { DefaultCarousel, StarRating, Recipecard } from "./index";
import { handleUpdateRating } from "../lib";
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
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      {/* section for carousel */}
      <section id="carousel" className="relative">
        <div className="absolute top-20 left-16 z-10 py-5 bg-slate-300 bg-opacity-[65%] px-2 rounded-md xsm:hidden md:block max-w-[75%]">
          <h1 className="bg-blend-screen text-3xl lg:text-4xl  text-red-700">
            Trending Now
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-green-500">
            Kelvin&apos;s Famous Salad With Cheese
          </h2>
          <p className="text-xl lg:text-2xl ">By Kelvin Kimaru</p>
          <StarRating percentage={5 / 5} onClick={handleUpdateRating} />
        </div>
        <DefaultCarousel />
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
        {loading && (
          <progress className="progress progress-primary w-full"></progress>
        )}
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
