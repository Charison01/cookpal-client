import React, { useState, useEffect } from "react";
import { DefaultCarousel, Recipecard } from "./index";
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
      <section className="flex flex-col items-center justify-center mb-2 py-2 border bg-[url('https://heavenlyoliveoils.com/wp-content/uploads/2020/04/Recipes_Salad_SonomaSalad_@2x-scaled.jpg')] rounded-lg">
        <h1 className="font-bold text-3xl lg:text-4xl pb-2 tracking-wide">
          Say{" "}
          <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            GoodBye!
          </span>
        </h1>
        <h2 className="font-bold text-3xl lg:text-4xl py-2">
          {" "}
          to Mealtime indecision with{" "}
          <span>
            C<span className="text-green-500 text-4xl lg:text-5xl">oo</span>
            kpal🥣
          </span>
        </h2>
        <p className="py-2 leading-loose text-2xl text-center">
          <span>
            C<span className="text-green-500">oo</span>
            kpal🥣
          </span>{" "}
          gives you access to healthy and affordable and customized recipes that
          are easier to cook without the need of expensive cookware!
        </p>
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
