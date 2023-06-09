import { useState } from "react";

function CommentForm({ onSubmit, value, onChange }) {
  const [submittedComment, setSubmittedComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    const newComment = {
      id: Date.now(),
      text: value,
    };
    setComments([...comments, newComment]);
    onSubmit(value);
    setSubmittedComment(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Write a comment..."
      />
      <button type="submit">Submit</button>
      {submittedComment && (
        <p>{submittedComment}</p>
      )}
      {comments.length > 0 && (
        <div>
          <h2>Komentar sebelumnya:</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default CommentForm;
