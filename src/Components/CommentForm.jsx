import Axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { showLoginPopup } from "../lib";

export default function CommentForm({ recipe_id, user_id }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const commentText = event.target.elements.comment.value;
    postComment(commentText);
    event.target.reset();
  };
  async function postComment(body) {
    if (user_id) {
      const data = {
        user_id,
        recipe_id,
        body,
      };
      try {
        Axios.post("https://cookpal.up.railway.app/comments", data);
        window.location.reload();
      } catch (error) {
        toast(error);
      }
    } else {
      toast.error("Kindly login to create a comment!");
    }
  }
  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <textarea
        name="comment"
        required
        className="textarea textarea-bordered textarea-primary w-full text-[15px]"
        placeholder="Start the discussion...."
      />
      <button
        className="btn btn-primary self-center my-2"
        type="submit"
        onClick={() => {
          if (!user_id) {
            showLoginPopup();
          }
        }}
        title="Login first">
        Post Comment
      </button>
    </form>
  );
}
