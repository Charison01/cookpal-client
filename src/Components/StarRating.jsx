import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Axios from "axios";
import { showLoginPopup } from "../lib";

//beginning of function block

export default function StarRating({ recipeRating, id }) {
  const [active, setActive] = useState(0);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (recipeRating) {
      const value = Math.round(recipeRating);
      setActive(value);
    }
  }, [recipeRating]);

  const handleStarClick = (rating) => {
    setActive(rating);
    setShowButton(true);
  };

  //check whether the user has logged in
  const userId = sessionStorage.getItem("user_id");
  if (!userId) {
    toast.error("Kindly login to rate a recipe");
    showLoginPopup();
    return;
  }
  //function to update rating if there is a user
  const handleRateClick = async () => {
    if (userId && id) {
      toast.success("Processing request...", {
        icon: "⏳",
      });

      const data = {
        value: active,
        user_id: userId,
        recipe_id: id,
      };

      try {
        await Axios.post("https://cookpal.up.railway.app/ratings", data);
        toast.success("Recipe rated successfully!");
        window.location.reload();
      } catch (error) {
        if (error.response && error.response.status === 422) {
          toast.error("You cannot rate the recipe more than once!");
        } else {
          console.error(error);
          toast.error("An error occurred while rating the recipe.");
        }
      }
    }
  };

  return (
    <div className="rating py-2 mb-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <label
          key={index}
          className={`star-rating ${index < active ? "active" : ""}`}>
          <input
            type="radio"
            name="rating"
            className={`rating-4 mask mask-star ${
              index < active || index === active - 1 ? "bg-yellow-400" : ""
            }`}
            checked={index === active - 1}
            onChange={() => handleStarClick(index + 1)}
          />
        </label>
      ))}
      {showButton && (
        <button
          className="btn btn-sm btn-primary mx-2"
          onClick={handleRateClick}>
          Rate {active} star
        </button>
      )}
    </div>
  );
}
