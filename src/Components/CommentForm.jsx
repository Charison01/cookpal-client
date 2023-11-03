import Axios from "axios";
import React, {useState} from "react";
import toast from "react-hot-toast";
import { showLoginPopup } from "../lib";

export default function CommentForm({ recipe_id, user_id }) {
  const [body, setBody]= useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    if(body===""){
      return false;
    }
    postComment();
    event.target.reset();
  };
  async function postComment() {
    if (user_id) {
      const data = {
        user_id,
        recipe_id,
        body,
      };
      try {
        Axios.post("https://cookpal.up.railway.app/comments", data);
        toast.success("comment added successfully");
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
        value={body}
        onChange={setBody}
        required
        className="textarea textarea-bordered textarea-primary w-full text-[15px]"
        placeholder="Start the discussion...."
      />
      <button
        className="btn btn-primary self-center my-2"
        type="submit"
        disabled={body===""}
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
