import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StarRating } from "../Components";
import Axios from "axios";
import toast from "react-hot-toast";

export default function Recipedetails() {
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
  }, []);
  //function to handleRating
  async function handleRating(pct) {
    const userId = sessionStorage.getItem("user_id");
    if (!userId) {
      toast.error("Kindly login to rate a recipe");
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
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-5 ">
        <div className="h-[350px]">
          <img
            src={recipe?.image}
            alt="recipe"
            className="mb-5 lg:mb-0 h-full flex-1"
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
          <div className="flex items-center font-bold gap-2">
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
            <span> Serves {recipe?.servings}</span>
          </div>
          <div className="flex items-center font-bold gap-2">
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
          <div className="actions">
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
          <StarRating onClick={handleRating} percentage={percentage} />
        </div>
      </div>
    </section>
  );
}
