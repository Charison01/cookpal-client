import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";

export default function Recipecard({ recipe, isLiked }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  //function to handle liking recipes
  const handleLiking = async (recipe_id, newLiked) => {
    const user_id = parseInt(sessionStorage.getItem("user_id"), 10);
    if (!user_id) {
      setLiked(false);
      toast.error("Kindly login first to like a recipe!");
      setTimeout(() => {
        showLoginPopup();
      }, 1000);
      return;
    }
    const data = {
      user_id,
      recipe_id,
    };
    if (newLiked === true) {
      try {
        const response = Axios.post(
          "https://cookpal.up.railway.app/bookmarks",
          data
        );
        toast.success("recipe bookmarked successfully");
      } catch (error) {
        toast.error(error);
        console.error("Error:", error);
      }
    } else if (newLiked === false) {
      try {
        const response = Axios.delete(
          "https://cookpal.up.railway.app/bookmarks",
          data
        );
      } catch (error) {
        console.error("Error:", error);
        toast.error(error);
      }
    }
  };

  return (
    <div className="h-[320px] xsm:w-full md:w-full lg:w-80 card border shadow-lg bg-base-100 my-3 mr-5">
      <img
        alt="recipe"
        className="h-3/5 rounded-lg cursor-pointer"
        src={recipe?.image}
        onClick={() => navigate(`/recipedetails/${recipe.id}`)}
      />
      <p className="text-sm mt-2 text-gray-500 px-2">Diary free</p>
      <div className="my-2 font-bold flex items-center justify-between px-2">
        <p className="text-2xl capitalize">{recipe?.title}</p>
        <p className="text-xl flex items-center gap-2">
          <span className="text-[#FFD700]">★</span>
          {recipe?.average_rating}
        </p>
      </div>
      <div className="font-normal flex items-center justify-between px-2">
        <div
          className="btn  bg-slate-200 btn-sm normal-case rounded-full border-none"
          onClick={() => navigate(`/recipedetails/${recipe.id}`)}>
          <p className="text-red-500 font-bold text-xl ">
            ⏲️ {recipe?.cooking_time} Min
          </p>
        </div>
        {/* svg for like */}
        <div className="flex items-center gap-5">
          <div
            className="btn btn-sm bg-gray-100 btn-circle p-1"
            onClick={(e) => {
              e.stopPropagation();
              const newLiked = !liked;
              handleLiking(recipe.id, newLiked);
              setLiked(newLiked);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={liked || isLiked ? "red" : "none"}
              className="cursor-pointer"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          {/* svg for comment like */}
          <div
            className="btn btn-sm bg-gray-100 btn-circle p-1"
            onClick={() => navigate(`/recipedetails/${recipe.id}`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="cursor-pointer"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
