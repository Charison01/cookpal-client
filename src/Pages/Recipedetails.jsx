import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StarRating, ShareModal, CommentForm } from "../Components";
import { showLoginPopup } from "../lib";
import { useAppContext } from "../Context/Provider";
import Axios from "axios";
import toast from "react-hot-toast";

export default function Recipedetails() {
  const { getAuthStatus } = useAppContext();
  const { isAuthenticated, userId } = getAuthStatus();
  const [liked, setLiked] = useState(false);
  const [recipe, setRecipe] = useState();
  const location = useLocation();
  const recipeId = location.pathname.split("/")[2];
  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(
          `https://cookpal.up.railway.app/recipes/${recipeId}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecipe(data);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }, [recipeId]);

  //function to handle sharing
  function handleSharing() {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Element with ID 'my_modal_3' not found.");
    }
  }
  //function to handle liking recipes
  const handleFavoriting = async (newLiked) => {
    if (!isAuthenticated) {
      toast.error("Kindly login first to like a recipe!");
      setTimeout(() => {
        showLoginPopup();
      }, 2000);
      return;
    }
    const data = {
      user_id: userId,
      recipe_id: recipeId,
    };
    if (newLiked === true) {
      try {
        Axios.post("https://cookpal.up.railway.app/bookmarks", data);
        toast.success("recipe bookmarked successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (newLiked === false) {
      try {
        Axios.delete("https://cookpal.up.railway.app/bookmarks", data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  //function to delete a comment
  function deleteComment(id) {
    if (id) {
      try {
        Axios.delete(`https://cookpal.up.railway.app/comments/${id}`);
        toast.success("Comment deleted successfully!");
        setRecipe((prev) => ({
          ...prev,
          comments: prev.comments.filter((comment) => comment.id !== id),
        }));
      } catch (error) {
        console.error(error);
        toast.error("Request failed");
      }
    }
  }
  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      {/* div for card title */}
      <div>
        <h1 className="font-bold text-2xl text-green-600 -tracking-wide capitalize">
          {recipe?.title}
        </h1>
        <div className="flex items-center font-bold gap-2">
          <span className="text-3xl text-yellow-400">★</span>
          <p className="text-gray-600 text-base py-2">
            {recipe?.average_rating} ({recipe?.ratings_count} ratings)
          </p>
        </div>
      </div>
      {/* first div to show recipe image and details as flex */}
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-3 bg-white">
        <div
          className="h-[250px] md:h-[380px] w-full lg:w-3/5 bg-cover bg-center"
          style={{ backgroundImage: `url('${recipe?.image}')` }}></div>
        {/* div for the details */}

        <div className="px-2 w-fit lg:w-2/5">
          <div>
            <p className="leading-loose hidden md:block">
              If you&apos;re looking for a healthy and nutritious diet, then
              this hearty {recipe?.title} looks fabulous placed on the table for
              everyone to dive into. This dish will leave you looking for more.
              See details below on how you can prepare this simple, affordable
              yet healthy dish!
            </p>
          </div>
          <div className="flex items-center font-bold gap-2 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span> Serves {recipe?.servings} people</span>
          </div>
          <div className="flex items-center font-bold gap-2 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M10 2h4" />
              <path d="M12 14v-4" />
              <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
              <path d="M9 17H4v5" />
            </svg>
            <span>
              {" "}
              Takes {recipe?.cooking_time} minutes to prepare and cook
            </span>
          </div>
          <div className="actions my-1">
            <div
              className="flex items-center gap-2 font-bold"
              onClick={() => {
                setLiked((prevLiked) => {
                  const newLiked = !prevLiked;
                  handleFavoriting(newLiked);
                  return newLiked;
                });
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={liked ? "blue" : "none"}
                className="cursor-pointer"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <p>Favorite Recipe</p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 font-bold cursor-pointer"
            onClick={handleSharing}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
            <p>Share Recipe</p>
          </div>

          <StarRating recipeRating={recipe?.average_rating} id={recipe?.id} />
        </div>
      </div>
      {/*modal for sharing*/}
      <ShareModal recipeId={recipeId} />
      {/* section for recipe ingredients and instructions */}
      <section className="bg-white p-2 my-2 rounded-md">
        <h1 className="font-bold text-gray-600 py-2 text-2xl">Ingredients</h1>

        <ul className="list-[square] list-inside   text-[15px]">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h1 className="font-bold text-gray-600 py-2 text-2xl">Instructions</h1>
        <ul className="list-decimal list-inside text-[15px]">
          {recipe?.instructions
            .split(".")
            .filter((instruction) => instruction.trim() !== "")
            .map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
        </ul>
      </section>
      {/* section for comments */}
      <section id="comments" className="bg-white p-2 my-2 rounded-md">
        <h1 className="font-bold text-gray-600 py-2 text-2xl">
          {recipe?.comments.length < 1
            ? "Be the First to Comment"
            : "Add to the Discussion"}
        </h1>
        <p>
          Before you comment please read our{" "}
          <a href="/community" className="link link-primary">
            community guidelines.
          </a>
        </p>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px]">
            {recipe?.comments?.length} Comments
          </p>
          {!isAuthenticated && (
            <button className="text-[16px] pl-2" onClick={showLoginPopup}>
              Login↗️
            </button>
          )}
        </div>
        {/* div for rendering input area */}

        <CommentForm
          recipe_id={recipeId}
          user_id={userId}
          setRecipe={setRecipe}
        />
        {/* div for rendering comments */}
        <div>
          {recipe?.comments?.length > 0 &&
            recipe?.comments.map((comment) => (
              <div key={comment.id} className="my-2">
                <div className="flex items-center gap-4 font-bold">
                  <p className="capitalize">{comment?.user?.name}</p>
                  <p>{comment.created_at_date}</p>
                </div>
                <div>
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt={comment?.user?.name}
                          src={
                            comment?.user?.picture
                              ? comment?.user?.picture
                              : `https://ui-avatars.com/api/?background=random&name=${comment?.user?.name}"},`
                          }
                        />
                      </div>
                    </div>
                    <div className="chat-bubble bg-slate-200 text-black">
                      {" "}
                      {comment?.body}
                    </div>
                  </div>
                  {comment?.user?.id === +userId && (
                    <div className="flex items-center gap-5 mx-10">
                      <button className="btn btn-sm btn-circle ">✏️</button>
                      <button
                        className="btn btn-sm btn-circle hover:bg-red-500"
                        onClick={() => deleteComment(comment?.id)}>
                        🗑️
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}
