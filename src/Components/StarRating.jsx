import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Axios from "axios";
import { showLoginPopup } from "../lib";
import { useAppContext } from "../Context/Provider";

//beginning of function block

export default function StarRating({ recipeRating, id }) {
  const [active, setActive] = useState(0);
  const { getAuthStatus } = useAppContext();
  const { isAuthenticated, userId } = getAuthStatus();
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

  //function to update rating if there is a user
  const handleRateClick = async () => {
    if (isAuthenticated && id) {
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
        toast.success("Thank you for rating!");
      } catch (error) {
        if (error.response && error.response.status === 422) {
          toast.error("You cannot rate the recipe more than once!");
        } else {
          console.error(error);
          toast.error("An error occurred while rating the recipe.");
        }
      }
    } else {
      toast.error("Kindly login to rate a recipe");
      showLoginPopup();
      return;
    }
  };

  return (
    <div className="rating py-2 mb-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <label
          key={index}
          className={`star-rating ${index < active ? "active" : ""}`}>
          <p
            className={`text-3xl ${
              index < active || index === active - 1 ? "text-yellow-400" : ""
            }`}
            onClick={() => handleStarClick(index + 1)}>
            {" "}
            ★
          </p>
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
