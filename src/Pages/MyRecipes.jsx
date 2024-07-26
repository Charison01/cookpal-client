import React, { useState, useEffect } from "react";
import { Recipecard, NewRecipeForm } from "../Components";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
export default function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAuthStatus } = useAppContext();
  const { userId } = getAuthStatus();

  if (!userId) {
    showLoginPopup();
  }

  //fetch user recipes
  useEffect(() => {
    if (userId) {
      try {
        (async () => {
          const response = await fetch(
            `https://cookingpal.up.railway.app/user/${userId}/recipes`
          );
          if (response.ok) {
            const data = await response.json();
            setMyRecipes(data);
            setLoading(false);
          }
        })();
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  }, [userId]);

  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h1 className="font-bold text-2xl lg:text-3xl text-gray-600 py-2 px-2">
        {" "}
        My Recipes
      </h1>
      {/* section for creating new recipes */}
      <div className="py-4 px-2 flex items-center justify-center border rounded-lg bg-base-100">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_4").showModal()}>
          Create New Recipe
        </button>
      </div>
      {loading && (
        <progress className="progress progress-primary w-full mx-4"></progress>
      )}
      {/* section for rendering recipe cards */}
      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {myRecipes && myRecipes.length > 0 ? (
          myRecipes.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <h1 className={`font-bold alert-info ${loading ? "hidden" : ""}`}>
            You have no Recipes. Get Creating!
          </h1>
        )}
      </section>
      <NewRecipeForm setRecipes={setMyRecipes} />
    </section>
  );
}
