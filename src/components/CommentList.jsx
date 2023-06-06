import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
