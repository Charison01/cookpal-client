import React, { useState, useEffect } from "react";
import { Recipecard } from "../Components";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAuthStatus } = useAppContext();
  const { userId } = getAuthStatus();

  if (!userId) {
    showLoginPopup()
  }

  useEffect(() => {
    if (userId) {
      try {
        (async () => {
          const response = await fetch(
            `https://cookpal.up.railway.app/bookmarks/${userId}`
          );
          if (response.ok) {
            const data = await response.json();
            setLoading(false);
            setFavorites(data);
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
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-600">
        Here are your favorite recipes
      </h1>

      {/* section for rendering recipe cards */}
      {loading && (
        <progress className="progress progress-primary w-full mx-4"></progress>
      )}
      <section className="py-2 px-2 recipecard-grid-container ">
        {/* set the grid to auto-rows */}
        {favorites && Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((recipe) => (
            <Recipecard
              key={recipe.id}
              recipe={recipe}
              isLiked={true}
              deleteIcon={true}
              setFavorites={setFavorites}
            />
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
