import React, { useState, useEffect } from "react";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";
import { Recipecard } from "../Components";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const userId = sessionStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      showLoginPopup();
      navigate("/");
    }
    if (userId) {
      try {
        (async () => {
          const response = await fetch(
            `https://cookpal.up.railway.app/bookmarks/${userId}`
          );
          if (response.ok) {
            const data = await response.json();
            setFavorites(data);
          }
        })();
      } catch (error) {
        console.error(error);
      }
    }
  }, [userId, navigate]);
  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-600">
        Here are your favorite recipes
      </h1>
      {/* section for rendering recipe cards */}
      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {favorites && favorites.length > 0 ? (
          favorites.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} isLiked={true} />
          ))
        ) : (
          <div className="w-full rounded-lg bg-base-200 p-4">
            <h1 className="text-xl font-bold text-gray-600 ">
              You have no favorite recipes, let&apos;s change that
            </h1>
            <a href="/recipes">
              <button className="btn btn-secondary my-2 w-full">
                Explore Recipes
              </button>
            </a>
          </div>
        )}
      </section>
    </section>
  );
}
