import React, { useState, useEffect } from "react";
import { Recipecard, NewRecipeForm } from "../Components";
export default function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const userId = sessionStorage.getItem("user_id");
  useEffect(() => {
    if (userId) {
      try {
        (async () => {
          const response = await fetch(
            `https://cookpal.up.railway.app/user/${userId}/recipes`
          );
          if (response.ok) {
            const data = await response.json();
            setMyRecipes(data);
            console.log(data);
          }
        })();
      } catch (error) {
        console.error(error);
      }
    }
  }, [userId]);

  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-opacity-[65%]">
      <h1 className="font-bold text-2xl lg:text-3xl text-gray-600 py-2 px-2">
        {" "}
        My Recipes
      </h1>
      {/* section for creating new recipes */}
      <div className="py-4 px-2 flex items-center justify-center border bg-base-200">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_4").showModal()}>
          Create New Recipe
        </button>
      </div>
      {/* section for rendering recipe cards */}
      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {myRecipes && myRecipes.length > 0 ? (
          myRecipes.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <h1 className="font-bold alert-info">
            You have no Recipes. Get Creating!
          </h1>
        )}
      </section>
      <NewRecipeForm setRecipes={setMyRecipes}/>
    </section>
  );
}
