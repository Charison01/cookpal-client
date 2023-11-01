import React from "react";

export default function CommentForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const commentText = event.target.elements.comment.value;
    console.log(commentText);
    event.target.reset();
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <textarea
        name="comment" 
        className="textarea textarea-bordered textarea-primary w-full text-xl"
        placeholder="Start the discussion...."
      />
      <button className="btn btn-primary self-center my-2" type="submit">
        Post Comment
      </button>
    </form>
  );
}

