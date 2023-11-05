import { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { showLoginPopup } from "../lib";

export default function CommentForm({ recipe_id, user_id, setRecipe }) {
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body === "") {
      return false;
    }
    postComment();
    event.target.reset();
  };
  async function postComment(e) {
    if (user_id) {
      const data = {
        user_id,
        recipe_id,
        body,
      };
      try {
        const response = await Axios.post(
          "https://cookpal.up.railway.app/comments",
          data
        );
        const responseData = await response.data;
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          comments: [...prevRecipe.comments, responseData],
        }));
        toast.success("comment added successfully");
        setBody("");
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
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        className="textarea textarea-bordered textarea-primary w-full text-[15px]"
        placeholder="Start the discussion...."
      />
      <button
        className="btn btn-primary self-center my-2"
        type="submit"
        disabled={body === "" || !user_id}
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
