import Axios from "axios";
import toast from "react-hot-toast";
import { showLoginPopup } from "../lib";

export default function CommentForm({
  recipe_id,
  user_id,
  setRecipe,
  comment,
  setComment,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
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
        body: comment,
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
        setComment("");
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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className="textarea textarea-bordered textarea-primary w-full text-[15px]"
        placeholder="Start the discussion...."
      />
      <button
        className="btn btn-primary self-center my-2"
        type="submit"
        disabled={comment === "" || !user_id}
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
