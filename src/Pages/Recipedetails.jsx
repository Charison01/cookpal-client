import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StarRating, ShareModal, CommentForm } from "../Components";
import { showLoginPopup } from "../lib";
import Axios from "axios";
import toast from "react-hot-toast";

export default function Recipedetails() {
  const userId = sessionStorage.getItem("user_id");
  const [recipe, setRecipe] = useState();
  const [percentage, setPercentage] = useState(0);
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
          setPercentage(data.average_rating / 5);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }, [recipeId]);
  //function to handleRating
  async function handleRating(pct) {
    const userId = sessionStorage.getItem("user_id");
    if (!userId) {
      toast.error("Kindly login to rate a recipe");
      showLoginPopup();
      return;
    }
    const newRating = pct * 5;
    setPercentage(newRating);
    const data = {
      value: newRating,
      user_id: userId,
      recipe_id: recipeId,
    };

    setTimeout(async () => {
      try {
        const response = await Axios.post(
          "https://cookpal.up.railway.app/ratings",
          data
        );
        const responseData = response.data;
        console.log(responseData);
      } catch (error) {
        toast.error(error);
      }
    }, 8000);
  }
  //function to handle sharing
  function handleSharing() {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Element with ID 'my_modal_3' not found.");
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
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-gray-600 text-base py-2">
            {recipe?.average_rating} Average community ratings
          </p>
        </div>
      </div>
      {/* first div to show recipe image and details as flex */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-5 bg-base-100 rounded-md mb-3">
        <div className="h-[350px]">
          <img
            src={recipe?.image}
            alt="recipe"
            className="mb-5 lg:mb-0 h-full flex-1 rounded-l-md"
          />
        </div>
        {/* div for the details */}

        <div className="w-fit lg:w-2/5">
          <div>
            <p className="leading-loose">
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
            <div className="flex items-center gap-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
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

          <StarRating onClick={handleRating} percentage={percentage} />
        </div>
      </div>
      {/*modal for sharing*/}
      <ShareModal recipeId={recipeId} />
      {/* section for recipe ingredients and instructions */}
      <section className="bg-white p-2 my-2 rounded-md">
        <h1 className="font-bold text-gray-600 py-2 text-2xl">Ingredients</h1>

        <ul className="list-[square] list-inside   text-[18px]">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h1 className="font-bold text-gray-600 py-2 text-2xl">Instructions</h1>
        <ul className="list-decimal list-inside text-[18px]">
          {recipe?.instructions
            .split(".")
            .filter((instruction) => instruction.trim() !== "")
            .map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
        </ul>
      </section>
      {/* section for comments */}
      <section className="bg-white p-2 my-2 rounded-md">
        <h1 className="font-bold text-gray-600 py-2 text-2xl">
          {recipe?.comments.length < 1
            ? "Be the First to Comment"
            : "Add to the Discussion"}
        </h1>
        <p>
          Before you comment please read our{" "}
          <a
            href="https://realfood.tesco.com/curatedlist/tesco-real-food-community-rules.html"
            className="link link-primary">
            community guidelines
          </a>
        </p>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px]">
            {recipe?.comments?.length} Comments
          </p>
          {!userId && (
            <button className="text-[16px] pl-2" onClick={showLoginPopup}>
              Login↗️
            </button>
          )}
        </div>
        {/* div for rendering input area */}

        <CommentForm recipe_id={recipeId} user_id={userId} />
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
                        <img src="https://senditcourrier.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F299cfb3c-a557-4483-817a-fb3ed3bb98ea-wvvx2k.jpg&w=96&q=75" />
                      </div>
                    </div>
                    <div className="chat-bubble chat-bubble-info">
                      {" "}
                      {comment?.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}