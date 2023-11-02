import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import EditRecipeForm from "./EditRecipeForm";
import { showLoginPopup, deleteRecipe } from "../lib";
import Deleteicon from "./Deleteicon";
import { useNavigate } from "react-router-dom";

export default function Recipecard({
  recipe,
  isLiked,
  deleteIcon,
  setFavorites,
}) {
  const [liked, setLiked] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const navigate = useNavigate();
  const user_id = parseInt(sessionStorage.getItem("user_id"), 10);
  //function to handle liking recipes
  const handleLiking = async (recipe_id, newLiked) => {
    if (!user_id) {
      setLiked(false);
      toast.error("Kindly login first to like a recipe!");
      setTimeout(() => {
        showLoginPopup();
      }, 1000);
      return;
    }
    const payload = {
      user_id: user_id,
      recipe_id: recipe_id,
    };
    if (newLiked === true) {
      try {
        Axios.post("https://cookpal.up.railway.app/bookmarks", payload);
        toast.success("recipe bookmarked successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (newLiked === false) {
      try {
        Axios.delete("https://cookpal.up.railway.app/bookmarks", payload);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  //function to edit recipe
  function updateRecipeDetails() {
    if (shouldShowModal) {
      const modal = document.getElementById("my_modal_6");
      if (modal) {
        modal.showModal();
      } else {
        console.error("Element with ID 'my_modal_6' not found.");
      }
    }
  }

  return (
    <div className="xsm:h-fit xsm:pb-2 h-[350px] lg:h-[320px] xsm:w-full md:w-full lg:w-80 card border shadow-lg bg-base-100 my-2 md:my-3 md:mr-5 relative">
      <img
        alt="recipe"
        className="h-3/5 rounded-lg cursor-pointer"
        src={recipe?.image}
        onClick={() => navigate(`/recipedetails/${recipe.id}`)}
      />
      <div className="rounded-full h-10 w-10 ring-2 ring-offset-2 ring-blue-500 absolute top-1/2 left-1/2 md:mt-5">
        <img
          src={
            recipe?.user?.picture
              ? recipe?.user?.picture
              : `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${recipe?.user?.name}`
          }
          alt={recipe?.user?.name}
          className="rounded-full h-10 w-10"
        />
      </div>
      <p className="text-sm mt-2 text-gray-500 px-2 capitalize flex items-center gap-2">
        <small>by </small>
        {recipe?.user?.name}
      </p>
      <div className="my-2 font-bold flex items-center justify-between px-2">
        <p className="text-xl capitalize">{recipe?.title}</p>
        <p className="text-xl flex items-center gap-2">
          <span className="text-[#FFD700]">★</span>
          {recipe?.average_rating}
        </p>
      </div>
      <div className="font-normal flex items-center justify-between px-2">
        <div
          className="btn  bg-slate-200 btn-sm normal-case rounded-full border-none"
          onClick={() => navigate(`/recipedetails/${recipe.id}`)}>
          <p className="text-red-500 font-bold md:text-xl ">
            ⏲️ {recipe?.cooking_time} Min
          </p>
        </div>
        {/* svg for like */}
        <div className="flex items-center gap-5">
          {user_id && recipe?.user?.id === user_id ? (
            <>
              {/* svg for editing */}
              <div
                className="btn btn-sm bg-gray-100 btn-circle p-1"
                onClick={() => {
                  setShouldShowModal(true);
                  updateRecipeDetails();
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              {/* svg for deleting recipe */}
              <div
                className="btn btn-sm bg-gray-100 btn-circle p-1"
                onClick={() => deleteRecipe(recipe?.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </div>
            </>
          ) : (
            <>
              <div
                className="btn btn-sm bg-gray-100 btn-circle p-1"
                onClick={() => {
                  setLiked((prevLiked) => {
                    const newLiked = !prevLiked;
                    handleLiking(recipe?.id, newLiked);
                    return newLiked;
                  });
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
            </>
          )}
        </div>
      </div>
      {shouldShowModal && (
        <EditRecipeForm recipe={recipe} setShowModal={setShouldShowModal} />
      )}
      {/* remove from favorites icon */}
      {deleteIcon && <Deleteicon id={recipe?.id} setFavorites={setFavorites} />}
    </div>
  );
}
