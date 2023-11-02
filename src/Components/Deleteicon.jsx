import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Axios from "axios";

export default function Deleteicon({ id, setFavorites }) {
  const user_id = parseInt(sessionStorage.getItem("user_id"), 10);
  const handleClick = () => {
    if (id && user_id) {
      Swal.fire({
        icon: "warning",
        text: "Are you sure you want to unfavorite this recipe?",
        showCloseButton: true,
        confirmButtonText: "Remove",
        showCancelButton: true,
        cancelButtonText: "Nevermind",
        confirmButtonColor: "#FF0000",
        cancelButtonColor: "#0056f1",
      }).then((result) => {
        if (result.isConfirmed) {
          removeFavorite();
        }
      });
    }
  };
  function removeFavorite() {
    const user_id = sessionStorage.getItem("user_id");
    const payload = {
      user_id: user_id,
      recipe_id: id,
    };

    fetch("https://cookpal.up.railway.app/bookmarks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.status === 204) {
          // Successful deletion
          toast.success("Recipe removed from favorites!");
          setFavorites((currentFavorites) =>
            currentFavorites.filter((favorite) => favorite.id !== id)
          );
        } else {
          return response.json().then((data) => {
            console.error("Error:", data);
            toast.error("Failed to remove favorite");
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to remove favorite");
      });
  }

  return (
    <button
      className="bg-gray-200 btn-sm btn-circle flex items-center justify-center absolute top-1 right-1 "
      onClick={handleClick}>
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
    </button>
  );
}
